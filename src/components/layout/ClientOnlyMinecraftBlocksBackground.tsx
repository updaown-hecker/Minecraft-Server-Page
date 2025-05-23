
"use client";

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { useState, useEffect } from 'react'; // Added useState and useEffect

// Define a type for the props if MinecraftBlocksBackground expects any
// For now, assuming no props or implicitly handled by the component itself.
interface MinecraftBlocksBackgroundProps {}

// Dynamically import MinecraftBlocksBackground with SSR disabled
const DynamicMinecraftBlocksBackground = dynamic<MinecraftBlocksBackgroundProps>(
  () => import('@/components/layout/MinecraftBlocksBackground'),
  { ssr: false }
);

const ClientOnlyMinecraftBlocksBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render anything until mounted on the client
  }

  // You could pass props here if needed: <DynamicMinecraftBlocksBackground {...props} />
  return <DynamicMinecraftBlocksBackground />;
};

export default ClientOnlyMinecraftBlocksBackground;
