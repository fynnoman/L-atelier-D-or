"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function GlassObject() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.06;
  });

  return (
    <group ref={ref}>
      {/* Lens ring */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.35, 0.06, 64, 200]} />
        <meshStandardMaterial
          color="#b48a52"
          metalness={1}
          roughness={0.18}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Inner glass disc */}
      <mesh>
        <cylinderGeometry args={[1.29, 1.29, 0.04, 128]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.25}
          roughness={0.05}
          ior={1.5}
          chromaticAberration={0.05}
          anisotropy={0.4}
          distortion={0.15}
          distortionScale={0.25}
          temporalDistortion={0.02}
          color="#f2dcb1"
          attenuationColor="#d9b78a"
          attenuationDistance={2}
        />
      </mesh>

      {/* Secondary halo */}
      <mesh position={[0, 0, -0.05]}>
        <torusGeometry args={[1.5, 0.008, 32, 200]} />
        <meshStandardMaterial
          color="#f2dcb1"
          metalness={1}
          roughness={0.05}
          emissive="#7a5a30"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] noise-bg overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grain" />

      {/* 3D canvas */}
      <motion.div
        style={{ scale: canvasScale, y: canvasY }}
        className="absolute inset-0 z-0"
      >
        <Canvas
          camera={{ position: [0, 0, 4.4], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} color="#f2dcb1" />
          <directionalLight position={[-4, -2, 3]} intensity={0.6} color="#b48a52" />
          <Suspense fallback={null}>
            <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
              <GlassObject />
            </Float>
            <Environment preset="warehouse" />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Copy layer */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 pt-40 md:pt-52 pb-24 px-6 md:px-10 max-w-[1400px] mx-auto"
      >
        <div className="eyebrow">Maison d&apos;Optique · Édition Automne</div>

        <h1 className="mt-6 font-display text-[14vw] md:text-[10vw] leading-[0.88] tracking-tight">
          Objekte
          <br />
          aus <span className="serif-italic gold-text">Licht</span>
          <br />
          und Titan.
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 max-w-2xl">
          <p className="text-ink-2 text-base md:text-lg leading-relaxed">
            Vier Fassungen. Jede in kleiner Serie. Handgefertigt zwischen dem
            Schweizer Jura und der Werkstatt in Berlin.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/kollektion" className="btn btn-primary">
            Kollektion ansehen
          </a>
          <a href="#manifest" className="btn btn-ghost">
            Das Haus
          </a>
        </div>
      </motion.div>

      {/* Bottom hairline + scroll cue */}
      <div className="absolute bottom-8 inset-x-0 z-10 flex flex-col items-center gap-3 text-muted">
        <div className="hairline w-40" />
        <div className="text-[0.7rem] tracking-[0.32em] uppercase">Scroll</div>
      </div>
    </section>
  );
}
