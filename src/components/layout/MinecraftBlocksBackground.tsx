
"use client";

import type React from 'react';
import { useRef, useMemo, useEffect } from 'react'; // Removed useState
import * as ReactThreeFiber from '@react-three/fiber';
import * as THREE from 'three';

interface BlockProps {
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  rotationSpeed?: [number, number, number];
}

const Block: React.FC<BlockProps> = ({
  position,
  color,
  size = [1, 1, 1],
  rotationSpeed = [0.1, 0.15, 0.05]
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  // Random initial rotation
  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = Math.random() * Math.PI * 2;
      ref.current.rotation.y = Math.random() * Math.PI * 2;
      ref.current.rotation.z = Math.random() * Math.PI * 2;
    }
  }, []);

  ReactThreeFiber.useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * rotationSpeed[0];
      ref.current.rotation.y += delta * rotationSpeed[1];
      ref.current.rotation.z += delta * rotationSpeed[2];
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size as [number, number, number]} />
      <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
    </mesh>
  );
};

interface MinecraftBlocksBackgroundProps {
  blockCount?: number;
  spread?: number;
}

const MinecraftBlocksBackground: React.FC<MinecraftBlocksBackgroundProps> = ({ blockCount = 20, spread = 20 }) => {
  const blocks = useMemo(() => {
    const blockColors = ['#55A630', '#808080', '#8B4513', '#D2B48C', '#4682B4', '#FFD700']; // Grass, Stone, Wood, Sand, Water (Lapis), Gold
    const blockData = [];
    for (let i = 0; i < blockCount; i++) {
      blockData.push({
        position: [
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread - 10, // Push them further back
        ] as [number, number, number],
        color: blockColors[Math.floor(Math.random() * blockColors.length)],
        size: [
          Math.random() * 0.5 + 0.8,
          Math.random() * 0.5 + 0.8,
          Math.random() * 0.5 + 0.8
        ] as [number, number, number],
        rotationSpeed: [
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
        ] as [number, number, number],
      });
    }
    return blockData;
  }, [blockCount, spread]);

  return (
    <div className="fixed inset-0 -z-60 pointer-events-none">
      <ReactThreeFiber.Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="blue" />

        {blocks.map((block, i) => (
          <Block
            key={i}
            position={block.position}
            color={block.color}
            size={block.size}
            rotationSpeed={block.rotationSpeed}
          />
        ))}
      </ReactThreeFiber.Canvas>
    </div>
  );
};

export default MinecraftBlocksBackground;
