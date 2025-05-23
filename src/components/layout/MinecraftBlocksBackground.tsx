
"use client";

import type React from 'react';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// We will dynamically import Canvas and useFrame from @react-three/fiber
type R3FModule = typeof import('@react-three/fiber');

interface BlockProps {
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  // rotationSpeed?: [number, number, number]; // Keep commented if useFrame is also dynamic
}

const Block: React.FC<BlockProps & { useFrame?: R3FModule['useFrame'] }> = ({
  position,
  color,
  size = [1, 1, 1],
  // rotationSpeed = [0.1, 0.15, 0.05], // Keep commented
  useFrame // Pass useFrame if needed
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = Math.random() * Math.PI * 2;
      ref.current.rotation.y = Math.random() * Math.PI * 2;
      ref.current.rotation.z = Math.random() * Math.PI * 2;
    }
  }, []);

  // Example of how to use useFrame if it were active:
  // if (useFrame) {
  //   useFrame((_state, delta) => {
  //     if (ref.current) {
  //       ref.current.rotation.x += delta * rotationSpeed[0];
  //       ref.current.rotation.y += delta * rotationSpeed[1];
  //       ref.current.rotation.z += delta * rotationSpeed[2];
  //     }
  //   });
  // }


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
  const [r3fModule, setR3fModule] = useState<R3FModule | null>(null);
  const [errorLoadingR3F, setErrorLoadingR3F] = useState<string | null>(null);

  useEffect(() => {
    import('@react-three/fiber')
      .then(module => {
        setR3fModule(module);
      })
      .catch(err => {
        console.error("Failed to dynamically load @react-three/fiber:", err);
        setErrorLoadingR3F("Failed to load 3D background module.");
      });
  }, []);

  const blocks = useMemo(() => {
    const blockColors = ['#55A630', '#808080', '#8B4513', '#D2B48C', '#4682B4', '#FFD700'];
    const blockData = [];
    for (let i = 0; i < blockCount; i++) {
      blockData.push({
        id: `block-${i}`,
        position: [
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread - 10,
        ] as [number, number, number],
        color: blockColors[Math.floor(Math.random() * blockColors.length)],
        size: [
          Math.random() * 0.5 + 0.8,
          Math.random() * 0.5 + 0.8,
          Math.random() * 0.5 + 0.8
        ] as [number, number, number],
      });
    }
    return blockData;
  }, [blockCount, spread]);

  if (errorLoadingR3F) {
    return <div data-testid="r3f-error-placeholder" style={{ display: 'none' }}>Error: {errorLoadingR3F}</div>;
  }

  if (!r3fModule) {
    return <div data-testid="r3f-module-loading-placeholder" style={{ display: 'none' }}>Loading 3D background...</div>;
  }

  const { Canvas } = r3fModule;
  // const { useFrame } = r3fModule; // If you were to use useFrame

  return (
    <div className="fixed inset-0 -z-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="blue" />
        {blocks.map((blockProps) => (
          <Block
            key={blockProps.id}
            position={blockProps.position}
            color={blockProps.color}
            size={blockProps.size}
            // useFrame={useFrame} // Pass if Block component uses it
          />
        ))}
      </Canvas>
    </div>
  );
};

export default MinecraftBlocksBackground;
