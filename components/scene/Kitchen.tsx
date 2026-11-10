"use client"

// "Something is cooking": four things I build (phone app, website, server, hardware)
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

const FLAME = "#ff5a1f"
const COBALT = "#2f5bff"
const MINT = "#12b07a"
const INK = "#0d1016"

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
  return (
    <Html position={position} center distanceFactor={compact ? 4.2 : 6} zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
      <div className="whitespace-nowrap rounded-full border border-line bg-surface/90 px-3 py-1 font-mono text-[11px] tracking-wide text-ink shadow-sm backdrop-blur">
        {children}
      </div>
    </Html>
  )
}

function Phone() {
  const screen = useCanvasTexture(256, 512, (c) => {
    rr(c, 0, 0, 256, 512, 0, "#f7f8fa")
    rr(c, 0, 0, 256, 64, 0, INK)
    c.fillStyle = "#fff"
    c.font = "600 22px sans-serif"
    c.fillText("Chats", 20, 42)
    const msgs: [number, number, string][] = [
      [20, 100, "#e6e9ef"], [96, 160, FLAME], [20, 220, "#e6e9ef"], [70, 280, FLAME], [20, 340, "#e6e9ef"],
    ]
    msgs.forEach(([x, y, col], i) => rr(c, x, y, i % 2 ? 140 : 160, 44, 18, col))
    rr(c, 16, 440, 224, 48, 24, "#e6e9ef")
  })
  return (
    <group>
      <RoundedBox args={[0.92, 1.84, 0.12]} radius={0.12} smoothness={6}>
        <meshStandardMaterial color={INK} metalness={0.7} roughness={0.25} />
      </RoundedBox>
      <mesh position={[0, 0, 0.062]}>
        <planeGeometry args={[0.8, 1.6]} />
        <meshBasicMaterial map={screen} toneMapped={false} />
      </mesh>
      <Label position={[0, -1.18, 0]}>Mobile apps</Label>
    </group>
  )
}

function Browser() {
  const screen = useCanvasTexture(512, 320, (c) => {
    rr(c, 0, 0, 512, 320, 0, "#ffffff")
    rr(c, 0, 0, 512, 34, 0, "#eef0f3")
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
    ;[0, 1, 2].forEach((i) => rr(c, 32 + i * 152, 228, 136, 70, 10, "#eef0f3"))
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

function Chip() {
  return (
    <group rotation={[0.5, 0.3, 0]}>
      <RoundedBox args={[1.05, 0.12, 1.05]} radius={0.03} smoothness={4}>
        <meshStandardMaterial color="#14532d" metalness={0.3} roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[0.48, 0.1, 0.48]} radius={0.02} position={[0, 0.1, 0]}>
        <meshStandardMaterial color={INK} metalness={0.6} roughness={0.3} />
      </RoundedBox>
      {Array.from({ length: 16 }).map((_, i) => {
        const side = Math.floor(i / 4)
        const k = (i % 4) * 0.1 - 0.15
        const pos: [number, number, number] =
          side === 0 ? [k, 0.08, 0.3] : side === 1 ? [k, 0.08, -0.3] : side === 2 ? [0.3, 0.08, k] : [-0.3, 0.08, k]
        return (
          <mesh key={i} position={pos}>
            <boxGeometry args={[0.04, 0.02, 0.04]} />
            <meshStandardMaterial color="#d4a84a" metalness={1} roughness={0.25} />
          </mesh>
        )
      })}
      <Label position={[0, -0.55, 0]}>Hardware & robots</Label>
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
      <Label position={[0, 0.98, 0]}>AI</Label>
    </group>
  )
}

const SATS: { id: string; base: THREE.Vector3; el: () => JSX.Element; rot: number }[] = [
  { id: "phone", base: new THREE.Vector3(-1.95, 0.85, -0.2), el: Phone, rot: 0.35 },
  { id: "web", base: new THREE.Vector3(1.85, 1.05, -0.7), el: Browser, rot: -0.35 },
  { id: "server", base: new THREE.Vector3(1.6, -1.2, 0.1), el: Server, rot: -0.5 },
  { id: "chip", base: new THREE.Vector3(-1.6, -1.2, 0.3), el: Chip, rot: 0.2 },
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
      const s = (compact ? 0.66 : 0.8) * (1 - p * 0.15)
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
