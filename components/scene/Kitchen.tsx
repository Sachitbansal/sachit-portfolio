"use client"

// "Something is cooking": four things I build (automations, websites, cloud, servers)
// float around an AI core and stream data into it. Scrolling pulls them together;
// the pointer tilts the whole rig.

import { Canvas, useFrame } from "@react-three/fiber"
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  Lightformer,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei"
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"

const Compact = createContext(false)
import * as THREE from "three"

const FLAME = "#377dff"
const COBALT = "#35c6d9"
const MINT = "#12b07a"
const INK = "#101b2d"

function useCanvasTexture(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void) {
  return useMemo(() => {
    const cv = document.createElement("canvas")
    cv.width = w
    cv.height = h
    const c = cv.getContext("2d")!
    draw(c)
    const t = new THREE.CanvasTexture(cv)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return t
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

function rr(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number, fill: string) {
  c.fillStyle = fill
  c.beginPath()
  c.roundRect(x, y, w, h, r)
  c.fill()
}

function Label({ children, position }: { children: React.ReactNode; position: [number, number, number] }) {
  const compact = useContext(Compact)
  if (compact) return null
  return (
    <Html position={position} center distanceFactor={compact ? 4.2 : 6} zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
      <div className="whitespace-nowrap rounded-full border border-line bg-surface/90 px-3 py-1 font-mono text-[11px] tracking-wide text-ink shadow-sm backdrop-blur">
        {children}
      </div>
    </Html>
  )
}

function Workflow() {
  // Automation flow: trigger -> AI step -> action, with a pulse running through it.
  const pulse = useRef<THREE.Mesh>(null)
  const nodes: [number, number, number, string][] = [
    [-0.15, 0.62, 0, FLAME],
    [0.25, 0, 0.05, COBALT],
    [-0.15, -0.62, 0, MINT],
  ]
  const path = useMemo(
    () => new THREE.CatmullRomCurve3(nodes.map(([x, y, z]) => new THREE.Vector3(x, y, z))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const tube = useMemo(() => new THREE.TubeGeometry(path, 48, 0.018, 8, false), [path])
  useFrame(({ clock }) => {
    if (pulse.current) pulse.current.position.copy(path.getPoint((clock.elapsedTime * 0.45) % 1))
  })
  return (
    <group>
      <mesh geometry={tube}>
        <meshStandardMaterial color="#9aa3b2" />
      </mesh>
      {nodes.map(([x, y, z, col], i) => (
        <group key={i} position={[x, y, z]}>
          <RoundedBox args={[0.78, 0.36, 0.14]} radius={0.07} smoothness={4}>
            <meshStandardMaterial color="#ffffff" roughness={0.35} />
          </RoundedBox>
          <mesh position={[-0.24, 0, 0.075]}>
            <circleGeometry args={[0.08, 24]} />
            <meshBasicMaterial color={col} toneMapped={false} />
          </mesh>
          <mesh position={[0.08, 0.04, 0.075]}>
            <planeGeometry args={[0.36, 0.05]} />
            <meshBasicMaterial color={INK} />
          </mesh>
          <mesh position={[0.03, -0.05, 0.075]}>
            <planeGeometry args={[0.26, 0.04]} />
            <meshBasicMaterial color="#c9cfd8" />
          </mesh>
        </group>
      ))}
      <mesh ref={pulse}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={FLAME} toneMapped={false} />
      </mesh>
      <Label position={[0, -1.05, 0]}>Automations</Label>
    </group>
  )
}

function Browser() {
  const screen = useCanvasTexture(512, 320, (c) => {
    rr(c, 0, 0, 512, 320, 0, "#ffffff")
    rr(c, 0, 0, 512, 34, 0, "#f5f7fa")
    ;["#ff6b6b", "#ffc145", MINT].forEach((col, i) => {
      c.fillStyle = col
      c.beginPath()
      c.arc(20 + i * 18, 17, 6, 0, Math.PI * 2)
      c.fill()
    })
    rr(c, 32, 64, 230, 26, 6, INK)
    rr(c, 32, 102, 180, 14, 6, "#c9cfd8")
    rr(c, 32, 124, 200, 14, 6, "#c9cfd8")
    rr(c, 32, 160, 110, 34, 17, FLAME)
    rr(c, 290, 60, 190, 140, 14, COBALT)
    ;[0, 1, 2].forEach((i) => rr(c, 32 + i * 152, 228, 136, 70, 10, "#f5f7fa"))
  })
  return (
    <group>
      <RoundedBox args={[2.1, 1.38, 0.08]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#e9ecf1" metalness={0.2} roughness={0.35} />
      </RoundedBox>
      <mesh position={[0, 0, 0.042]}>
        <planeGeometry args={[2.0, 1.25]} />
        <meshBasicMaterial map={screen} toneMapped={false} />
      </mesh>
      <Label position={[0, -0.92, 0]}>Websites</Label>
    </group>
  )
}

function Server() {
  const leds = useRef<THREE.Mesh[]>([])
  useFrame(({ clock }) => {
    leds.current.forEach((m, i) => {
      const on = Math.sin(clock.elapsedTime * 4 + i * 1.7) > 0
      ;(m.material as THREE.MeshBasicMaterial).color.set(on ? MINT : "#1b2a24")
    })
  })
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <group key={i} position={[0, i * 0.34 - 0.34, 0]}>
          <RoundedBox args={[1.3, 0.28, 0.85]} radius={0.04} smoothness={4}>
            <meshStandardMaterial color="#1a1f28" metalness={0.8} roughness={0.3} />
          </RoundedBox>
          {[0, 1, 2].map((j) => (
            <mesh key={j} position={[-0.5 + j * 0.12, 0, 0.43]} ref={(m) => { if (m) leds.current[i * 3 + j] = m }}>
              <sphereGeometry args={[0.03, 12, 12]} />
              <meshBasicMaterial color={MINT} toneMapped={false} />
            </mesh>
          ))}
          {[0, 1, 2, 3, 4].map((j) => (
            <mesh key={`g${j}`} position={[0.05 + j * 0.11, 0, 0.428]}>
              <boxGeometry args={[0.07, 0.16, 0.01]} />
              <meshStandardMaterial color="#2a313c" />
            </mesh>
          ))}
        </group>
      ))}
      <Label position={[0, -0.78, 0]}>Hosting & servers</Label>
    </group>
  )
}

function Cloud() {
  const puffs: [number, number, number, number][] = [
    [0, 0.12, 0, 0.42],
    [-0.42, -0.05, 0.02, 0.3],
    [0.42, -0.04, 0.02, 0.32],
    [-0.2, -0.16, 0.12, 0.28],
    [0.2, -0.16, 0.12, 0.28],
    [0.05, 0.34, -0.05, 0.28],
  ]
  return (
    <group>
      {puffs.map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[r, 32, 32]} />
          <meshStandardMaterial color="#f4f7ff" roughness={0.55} />
        </mesh>
      ))}
      <mesh position={[0, -0.12, 0.42]}>
        <planeGeometry args={[0.5, 0.06]} />
        <meshBasicMaterial color={COBALT} />
      </mesh>
      <Label position={[0, -0.62, 0]}>Cloud & AWS</Label>
    </group>
  )
}

function Core() {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.62, 64, 64]} />
        <MeshDistortMaterial color={COBALT} emissive={COBALT} emissiveIntensity={0.25} roughness={0.15} metalness={0.3} distort={0.38} speed={2} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[0.95, 0.012, 16, 120]} />
        <meshBasicMaterial color={FLAME} toneMapped={false} />
      </mesh>
      <Label position={[0, 0.98, 0]}>AI agents</Label>
    </group>
  )
}

const SATS: { id: string; base: THREE.Vector3; el: () => JSX.Element; rot: number }[] = [
  { id: "flow", base: new THREE.Vector3(-1.95, 0.8, -0.2), el: Workflow, rot: 0.3 },
  { id: "web", base: new THREE.Vector3(1.85, 1.05, -0.7), el: Browser, rot: -0.35 },
  { id: "server", base: new THREE.Vector3(1.6, -1.2, 0.1), el: Server, rot: -0.5 },
  { id: "cloud", base: new THREE.Vector3(-1.6, -1.15, 0.3), el: Cloud, rot: 0.15 },
]

function DataStreams({ progress }: { progress: React.MutableRefObject<number> }) {
  const PER = 7
  const mesh = useRef<THREE.InstancedMesh>(null)
  const curves = useMemo(
    () =>
      SATS.map(({ base }) => {
        const mid = base.clone().multiplyScalar(0.5).add(new THREE.Vector3(0, 0.6, 0.6))
        return new THREE.QuadraticBezierCurve3(base.clone(), mid, new THREE.Vector3(0, 0, 0))
      }),
    [],
  )
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colors = useMemo(() => [FLAME, COBALT, MINT, FLAME], [])
  useEffect(() => {
    if (!mesh.current) return
    const c = new THREE.Color()
    for (let i = 0; i < SATS.length * PER; i++) mesh.current.setColorAt(i, c.set(colors[Math.floor(i / PER)]))
    mesh.current.instanceColor!.needsUpdate = true
  }, [colors])
  useFrame(({ clock }) => {
    if (!mesh.current) return
    const squeeze = 1 - progress.current * 0.55
    curves.forEach((curve, ci) => {
      for (let k = 0; k < PER; k++) {
        const t = (clock.elapsedTime * 0.35 + k / PER + ci * 0.13) % 1
        const p = curve.getPoint(t).multiplyScalar(squeeze)
        dummy.position.copy(p)
        dummy.scale.setScalar(0.5 + Math.sin(t * Math.PI) * 0.8)
        dummy.updateMatrix()
        mesh.current!.setMatrixAt(ci * PER + k, dummy.matrix)
      }
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, SATS.length * PER]}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  )
}

function Rig({ compact }: { compact: boolean }) {
  const group = useRef<THREE.Group>(null)
  const sats = useRef<(THREE.Group | null)[]>([])
  const progress = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  useFrame((_, dt) => {
    const target = Math.min(1, window.scrollY / (window.innerHeight * 0.9))
    progress.current = THREE.MathUtils.damp(progress.current, target, 4, dt)
    const p = progress.current
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.35 + p * 0.9, 3, dt)
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.current.y * 0.18, 3, dt)
      const s = (compact ? 0.74 : 0.8) * (1 - p * 0.15)
      group.current.scale.setScalar(s)
    }
    sats.current.forEach((g, i) => {
      if (!g) return
      const b = SATS[i].base
      g.position.set(b.x * (1 - p * 0.55), b.y * (1 - p * 0.55), b.z)
    })
  })

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.5}>
        <Core />
      </Float>
      {SATS.map((s, i) => {
        const El = s.el
        return (
          <group key={s.id} ref={(g) => { sats.current[i] = g }} position={s.base}>
            <Float speed={1.2 + i * 0.25} rotationIntensity={0.35} floatIntensity={0.8}>
              <group rotation={[0, s.rot, 0]}>
                <El />
              </group>
            </Float>
          </group>
        )
      })}
      <DataStreams progress={progress} />
    </group>
  )
}

export default function Kitchen() {
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    if (wrap.current) io.observe(wrap.current)
    const mq = window.matchMedia("(max-width: 1023px)")
    const set = () => setCompact(mq.matches)
    set()
    mq.addEventListener("change", set)
    return () => {
      io.disconnect()
      mq.removeEventListener("change", set)
    }
  }, [])

  return (
    <div ref={wrap} className="h-full w-full" aria-hidden="true">
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} />
        <Compact.Provider value={compact}>
          <Rig compact={compact} />
        </Compact.Provider>
        <ContactShadows position={[0, -2.1, 0]} opacity={0.22} scale={7} blur={3} far={4} />
        <Environment resolution={256}>
          <Lightformer intensity={2} position={[0, 5, -5]} scale={[10, 3, 1]} />
          <Lightformer intensity={1.2} position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
          <Lightformer intensity={1.2} color={FLAME} position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} />
        </Environment>
      </Canvas>
    </div>
  )
}
