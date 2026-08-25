"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron, Sparkles, Stars, Torus } from "@react-three/drei"
import { useEffect, useMemo, useRef } from "react"
import type { MutableRefObject } from "react"
import * as THREE from "three"

function Core() {
  const group = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.18
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })
  return (
    <group ref={group}>
      <Icosahedron args={[1.15, 1]}>
        <meshStandardMaterial color="#08251b" emissive="#00a967" emissiveIntensity={1.4} metalness={0.8} roughness={0.25} wireframe />
      </Icosahedron>
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color="#b8ffda" toneMapped={false} />
      </mesh>
      <pointLight color="#21d98d" intensity={3.2} distance={4.5} />
    </group>
  )
}

function RelicRings() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z -= delta * 0.07
  })
  return (
    <group ref={group} rotation={[0.55, 0.15, 0]}>
      <Torus args={[1.8, 0.012, 6, 64]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#d6a84f" transparent opacity={0.65} /></Torus>
      <Torus args={[2.18, 0.008, 6, 64]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#20d985" transparent opacity={0.42} /></Torus>
    </group>
  )
}

function Shards() {
  const shards = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    position: [Math.sin(i * 2.7) * 3, Math.cos(i * 1.8) * 2.3, Math.sin(i) * 1.2] as [number, number, number],
    scale: 0.06 + (i % 3) * 0.025,
  })), [])
  return <>{shards.map((shard, index) => <mesh key={index} position={shard.position} scale={shard.scale} rotation={[index, index * 0.7, index * 0.3]}><octahedronGeometry args={[1, 0]} /><meshStandardMaterial color={index % 3 ? "#60766c" : "#d6a84f"} emissive="#075e3c" emissiveIntensity={0.35} metalness={0.9} roughness={0.25} /></mesh>)}</>
}

function SceneContent({ pointer }: { pointer: MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null)
  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.12, 0.025)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.08, 0.025)
  })
  return <group ref={group}><Core /><RelicRings /><Shards /><Sparkles count={45} scale={7} size={1.5} speed={0.16} color="#45d99b" /></group>
}

export function ArcaneCommandScene() {
  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", onMove) }
  }, [])
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.15]} gl={{ antialias: false, powerPreference: "high-performance", alpha: true }} frameloop="always">
        <color attach="background" args={["#030b08"]} />
        <fog attach="fog" args={["#030b08", 5, 12]} />
        <ambientLight intensity={0.2} color="#b8ffda" />
        <directionalLight position={[3, 4, 5]} intensity={0.8} color="#d6a84f" />
        <Stars radius={18} depth={16} count={900} factor={1.6} saturation={0.2} fade speed={0.12} />
        <SceneContent pointer={pointer} />
      </Canvas>
    </div>
  )
}

export function updateArcanePointer(x: number, y: number) {
  return { x, y }
}
