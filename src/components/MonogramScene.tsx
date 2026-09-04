"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

type Props = {
  metal?: "gold" | "silver" | "graphite";
  intensity?: number;
  className?: string;
  scale?: number;
};

function MonogramPiece({
  metal = "gold",
  scale = 1,
}: {
  metal?: "gold" | "silver" | "graphite";
  scale?: number;
}) {
  const g = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!g.current) return;
    g.current.rotation.y += delta * 0.14;
    g.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.05;
  });

  const palette =
    metal === "silver"
      ? {
          ring: "#e8e6e2",
          bridge: "#a8a49c",
          glow: "#ffffff",
          glassTint: "#e4e0d6",
          attenuation: "#c9c5bd",
          emissive: "#3a3838",
        }
      : metal === "graphite"
        ? {
            ring: "#2a2a2a",
            bridge: "#1a1a1a",
            glow: "#4a4a4a",
            glassTint: "#8a867d",
            attenuation: "#3a3838",
            emissive: "#111111",
          }
        : {
            ring: "#c69a5a",
            bridge: "#9b7842",
            glow: "#f4dbaa",
            glassTint: "#f4dbaa",
            attenuation: "#c69a5a",
            emissive: "#7a5a30",
          };

  return (
    <group ref={g} scale={scale}>
      {/* Outer ring */}
      <mesh>
        <torusGeometry args={[1.42, 0.055, 96, 220]} />
        <meshStandardMaterial
          color={palette.ring}
          metalness={1}
          roughness={0.16}
          envMapIntensity={1.3}
        />
      </mesh>

      {/* Inner glass disc */}
      <mesh>
        <cylinderGeometry args={[1.35, 1.35, 0.035, 128]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.28}
          roughness={0.04}
          ior={1.52}
          chromaticAberration={0.06}
          anisotropy={0.5}
          distortion={0.14}
          distortionScale={0.28}
          temporalDistortion={0.02}
          color={palette.glassTint}
          attenuationColor={palette.attenuation}
          attenuationDistance={2.2}
        />
      </mesh>

      {/* Halo */}
      <mesh position={[0, 0, -0.06]}>
        <torusGeometry args={[1.58, 0.006, 32, 220]} />
        <meshStandardMaterial
          color={palette.glow}
          metalness={1}
          roughness={0.03}
          emissive={palette.emissive}
          emissiveIntensity={0.28}
        />
      </mesh>

      {/* Bridge bar */}
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[2.85, 0.04, 0.02]} />
        <meshStandardMaterial
          color={palette.bridge}
          metalness={1}
          roughness={0.22}
          envMapIntensity={1.1}
        />
      </mesh>

      {/* Bridge stones */}
      {[-0.24, 0.24].map((x) => (
        <mesh key={x} position={[x, 0, 0.05]}>
          <icosahedronGeometry args={[0.045, 0]} />
          <meshStandardMaterial
            color={palette.glow}
            metalness={1}
            roughness={0.02}
            emissive={palette.ring}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

// Standalone R3F canvas with the monogram piece. Drop it into any dark
// section — Environment lighting keeps it consistent.
export default function MonogramScene({
  metal = "gold",
  intensity = 1,
  className = "",
  scale = 1,
}: Props) {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.35 * intensity} />
        <directionalLight position={[3, 4, 5]} intensity={1.35 * intensity} color="#f4dbaa" />
        <directionalLight position={[-4, -2, 3]} intensity={0.7 * intensity} color="#c69a5a" />
        <pointLight position={[0, -3, 2]} intensity={0.6 * intensity} color="#4a2f18" />
        <Suspense fallback={null}>
          <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.55}>
            <MonogramPiece metal={metal} scale={scale} />
          </Float>
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </div>
  );
}
