"use client"

// A particle cloud that morphs between five shapes as the toolkit section scrolls:
// AI brain -> automation knot -> website -> cloud -> galaxy of projects.
// Logos for each stage orbit the current shape.

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

export type Logo = { path: string; title: string }

const COBALT = new THREE.Color("#4f7bff")
const FLAME = new THREE.Color("#ff6a33")
const MINT = new THREE.Color("#2fd39b")

// ---------- shape samplers ----------
function brain(n: number) {
  const out = new Float32Array(n * 3)
  const g = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const th = g * i
    let x = Math.cos(th) * r
    const z = Math.sin(th) * r
    const wr = 1 + 0.07 * Math.sin(9 * th) * Math.sin(7 * y * Math.PI)
    const side = x >= 0 ? 1 : -1
    x = x * 1.15 + side * 0.08
    out.set([x * 1.55 * wr, y * 1.3 * wr, z * 1.5 * wr], i * 3)
  }
  return out
}

function knot(n: number) {
  const out = new Float32Array(n * 3)
  const p = 2, q = 3
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2
    const c = new THREE.Vector3(
      (2 + Math.cos(q * t)) * Math.cos(p * t),
      (2 + Math.cos(q * t)) * Math.sin(p * t),
      Math.sin(q * t),
    ).multiplyScalar(0.62)
    const a = Math.random() * Math.PI * 2
    const rr = 0.22 * Math.sqrt(Math.random())
    out.set([c.x + Math.cos(a) * rr, c.y + Math.sin(a) * rr, c.z + (Math.random() - 0.5) * 0.3], i * 3)
  }
  return out
}

function website(n: number) {
  // A browser window drawn in points: frame, header bar, hero block, cards.
  const rects: [number, number, number, number][] = [
    [-2, 1.3, 4, 0.05], [-2, -1.3, 4, 0.05], [-2, -1.3, 0.05, 2.6], [1.95, -1.3, 0.05, 2.6],
    [-2, 1.0, 4, 0.04],
    [-1.75, 0.55, 1.6, 0.18], [-1.75, 0.25, 1.2, 0.08], [-1.75, 0.08, 1.0, 0.08], [-1.75, -0.25, 0.6, 0.18],
    [0.25, -0.35, 1.5, 1.1],
    [-1.75, -1.1, 1.1, 0.5], [-0.5, -1.1, 1.1, 0.5], [0.75, -1.1, 1.0, 0.5],
  ]
  const areas = rects.map(([, , w, h]) => Math.max(w * h, 0.12))
  const total = areas.reduce((a, b) => a + b, 0)
  const out = new Float32Array(n * 3)
  const rot = new THREE.Matrix4().makeRotationY(-0.35).multiply(new THREE.Matrix4().makeRotationX(0.12))
  const v = new THREE.Vector3()
  for (let i = 0; i < n; i++) {
    let r = Math.random() * total
    let k = 0
    while (r > areas[k]) r -= areas[k++]
    const [x, y, w, h] = rects[k]
    v.set(x + Math.random() * w, y + Math.random() * h, (Math.random() - 0.5) * 0.08).applyMatrix4(rot)
    out.set([v.x, v.y, v.z], i * 3)
  }
  return out
}

function cloud(n: number) {
  const balls: [number, number, number, number][] = [
    [0, 0.25, 0, 1.0], [-1.05, -0.15, 0.1, 0.75], [1.05, -0.1, 0.05, 0.8],
    [-0.5, -0.45, 0.35, 0.65], [0.5, -0.45, 0.35, 0.65], [0.2, 0.85, -0.2, 0.6],
  ]
  const out = new Float32Array(n * 3)
  const w = balls.map((b) => b[3] * b[3])
  const tw = w.reduce((a, b) => a + b, 0)
  let i = 0
  let guard = 0
  while (i < n && guard++ < n * 30) {
    let r = Math.random() * tw
    let k = 0
    while (r > w[k]) r -= w[k++]
    const [cx, cy, cz, cr] = balls[k]
    const u = Math.random() * 2 - 1
    const th = Math.random() * Math.PI * 2
    const s = Math.sqrt(1 - u * u)
    const p = [cx + cr * s * Math.cos(th), cy + cr * u, cz + cr * s * Math.sin(th)]
    const inside = balls.some(([bx, by, bz, br], j) => j !== k && Math.hypot(p[0] - bx, p[1] - by, p[2] - bz) < br * 0.98)
    if (inside) continue
    out.set([p[0] * 1.25, p[1] * 1.25 - 0.1, p[2] * 1.25], i * 3)
    i++
  }
  return out
}

function galaxy(n: number) {
  const out = new Float32Array(n * 3)
  for (let i = 0; i < n; i++) {
    const arm = i % 3
    const r = Math.pow(Math.random(), 0.6) * 2.5
    const a = r * 1.35 + (arm * Math.PI * 2) / 3 + (Math.random() - 0.5) * 0.5
    out.set([Math.cos(a) * r, (Math.random() - 0.5) * 0.25 * (1.2 - r / 2.5), Math.sin(a) * r], i * 3)
  }
  return out
}

// ---------- shaders ----------
const vert = /* glsl */ `
  attribute vec3 aA; attribute vec3 aB; attribute vec3 aC; attribute vec3 aD; attribute vec3 aE;
  attribute float aRand;
  uniform float uStage; uniform float uTime; uniform float uSize;
  uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
  varying vec3 vColor; varying float vAlpha;
  float stepT(float k){ return smoothstep(0.0, 1.0, clamp((uStage - k) * 1.5 - aRand * 0.5, 0.0, 1.0)); }
  void main(){
    float t1 = stepT(0.0), t2 = stepT(1.0), t3 = stepT(2.0), t4 = stepT(3.0);
    vec3 p = mix(aA, aB, t1); p = mix(p, aC, t2); p = mix(p, aD, t3); p = mix(p, aE, t4);
    float m = t1*(1.0-t1) + t2*(1.0-t2) + t3*(1.0-t3) + t4*(1.0-t4);
    p += normalize(p + 0.0001) * m * 2.2 * aRand;
    p += 0.025 * vec3(sin(uTime*1.3 + aRand*40.0), cos(uTime*1.1 + aRand*30.0), sin(uTime*0.9 + aRand*20.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.55 + aRand * 0.9) / -mv.z;
    vColor = aRand > 0.9 ? uC2 : (aRand > 0.8 ? uC3 : uC1);
    vAlpha = 0.55 + 0.45 * sin(uTime * 2.0 + aRand * 60.0);
  }
`
const frag = /* glsl */ `
  varying vec3 vColor; varying float vAlpha;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(vColor, a * vAlpha);
  }
`

function Particles({ stage, count }: { stage: React.MutableRefObject<number>; count: number }) {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const group = useRef<THREE.Points>(null)
  const { gl } = useThree()
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const a = brain(count)
    g.setAttribute("position", new THREE.BufferAttribute(a.slice(), 3))
    g.setAttribute("aA", new THREE.BufferAttribute(a, 3))
    g.setAttribute("aB", new THREE.BufferAttribute(knot(count), 3))
    g.setAttribute("aC", new THREE.BufferAttribute(website(count), 3))
    g.setAttribute("aD", new THREE.BufferAttribute(cloud(count), 3))
    g.setAttribute("aE", new THREE.BufferAttribute(galaxy(count), 3))
    const r = new Float32Array(count)
    for (let i = 0; i < count; i++) r[i] = Math.random()
    g.setAttribute("aRand", new THREE.BufferAttribute(r, 1))
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 6)
    return g
  }, [count])
  const uniforms = useMemo(
    () => ({
      uStage: { value: 0 },
      uTime: { value: 0 },
      uSize: { value: 40 * Math.min(gl.getPixelRatio(), 2) },
      uC1: { value: COBALT },
      uC2: { value: FLAME },
      uC3: { value: MINT },
    }),
    [gl],
  )
  const smooth = useRef(0)
  useFrame(({ clock }, dt) => {
    smooth.current = THREE.MathUtils.damp(smooth.current, stage.current, 5, dt)
    if (mat.current) {
      mat.current.uniforms.uStage.value = smooth.current
      mat.current.uniforms.uTime.value = clock.elapsedTime
    }
    if (group.current) {
      // gentle sway so every shape stays readable front-on; galaxy tilts toward the viewer
      group.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.45 + (smooth.current - Math.round(smooth.current)) * 1.2
      group.current.rotation.x = THREE.MathUtils.clamp(smooth.current - 3, 0, 1) * 0.55
    }
  })
  return (
    <points ref={group} geometry={geo}>
      <shaderMaterial
        ref={mat}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function logoTexture(path: string) {
  const s = 128
  const cv = document.createElement("canvas")
  cv.width = cv.height = s
  const c = cv.getContext("2d")!
  c.fillStyle = "#131820"
  c.strokeStyle = "#2a3442"
  c.lineWidth = 4
  c.beginPath()
  c.arc(s / 2, s / 2, s / 2 - 4, 0, Math.PI * 2)
  c.fill()
  c.stroke()
  c.save()
  c.translate(s / 2 - 28, s / 2 - 28)
  c.scale(56 / 24, 56 / 24)
  c.fillStyle = "#ffffff"
  c.fill(new Path2D(path))
  c.restore()
  const t = new THREE.CanvasTexture(cv)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function LogoRing({ logos, index, stage }: { logos: Logo[]; index: number; stage: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null)
  const mats = useRef<THREE.SpriteMaterial[]>([])
  const tex = useMemo(() => logos.map((l) => logoTexture(l.path)), [logos])
  const smooth = useRef(0)
  useFrame(({ clock }, dt) => {
    smooth.current = THREE.MathUtils.damp(smooth.current, stage.current, 5, dt)
    const w = THREE.MathUtils.clamp(1 - Math.abs(smooth.current - index) * 1.8, 0, 1)
    mats.current.forEach((m) => m && (m.opacity = w))
    if (group.current) {
      group.current.visible = w > 0.01
      group.current.rotation.y = -clock.elapsedTime * 0.25 + index
      group.current.scale.setScalar(0.7 + w * 0.3)
    }
  })
  return (
    <group ref={group}>
      {logos.map((l, i) => {
        const a = (i / logos.length) * Math.PI * 2
        return (
          <sprite key={l.title} position={[Math.cos(a) * 2.9, Math.sin(a * 2) * 0.45, Math.sin(a) * 2.9]} scale={0.5}>
            <spriteMaterial ref={(m) => { if (m) mats.current[i] = m }} map={tex[i]} transparent depthWrite={false} />
          </sprite>
        )
      })}
    </group>
  )
}

function Rig({ stage, stages, offsetX, offsetY, count }: { stage: React.MutableRefObject<number>; stages: Logo[][]; offsetX: number; offsetY: number; count: number }) {
  return (
    <group position={[offsetX, offsetY, 0]} scale={offsetY ? 0.82 : 1}>
      <Particles stage={stage} count={count} />
      {stages.map((logos, i) => (
        <LogoRing key={i} logos={logos} index={i} stage={stage} />
      ))}
    </group>
  )
}

export default function Universe({ stage, stages }: { stage: React.MutableRefObject<number>; stages: Logo[][] }) {
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [wide, setWide] = useState(true)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting))
    if (wrap.current) io.observe(wrap.current)
    const mq = window.matchMedia("(min-width: 1024px)")
    const set = () => setWide(mq.matches)
    set()
    mq.addEventListener("change", set)
    return () => {
      io.disconnect()
      mq.removeEventListener("change", set)
    }
  }, [])
  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      <Canvas frameloop={visible ? "always" : "never"} dpr={[1, 1.75]} camera={{ position: [0, 0, wide ? 8 : 11], fov: 42 }} gl={{ alpha: true, antialias: false }}>
        <Rig stage={stage} stages={stages} offsetX={wide ? 1.9 : 0} offsetY={wide ? 0 : 2.1} count={wide ? 7000 : 3500} />
      </Canvas>
    </div>
  )
}
