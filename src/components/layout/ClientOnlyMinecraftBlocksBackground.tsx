
"use client";

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

// Define a type for the props if MinecraftBlocksBackground expects any
// For now, assuming no props or implicitly handled by the component itself.
interface MinecraftBlocksBackgroundProps {}

// Dynamically import MinecraftBlocksBackground with SSR disabled
const DynamicMinecraftBlocksBackground = dynamic<MinecraftBlocksBackgroundProps>(
  () => import('@/components/layout/MinecraftBlocksBackground'),
  { ssr: false }
);

const ClientOnlyMinecraftBlocksBackground = () => {
  // You could pass props here if needed: <DynamicMinecraftBlocksBackground {...props} />
  return <DynamicMinecraftBlocksBackground />;
};

export default ClientOnlyMinecraftBlocksBackground;
