
"use client";

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { useState, useEffect } from 'react';

// Define a props interface for the component we are dynamically importing
// This should match the props accepted by MinecraftBlocksBackground
interface MinecraftBlocksBackgroundProps {
  blockCount?: number;
  spread?: number;
  // Add any other props that MinecraftBlocksBackground might accept
}

const ClientOnlyMinecraftBlocksBackground = () => {
  // State to hold the dynamically imported component's constructor
  const [MountedComponent, setMountedComponent] =
    useState<ComponentType<MinecraftBlocksBackgroundProps> | null>(null);

  useEffect(() => {
    // Perform the dynamic import inside useEffect to ensure it only runs on the client
    // after this wrapper component has mounted.
    const DynamicR3FBackground = dynamic(
      () => import('@/components/layout/MinecraftBlocksBackground'),
      {
        ssr: false,
        loading: () => <div data-testid="r3f-loading" style={{ display: 'none' }} />, // Placeholder during load, can be null or styled
      }
    );
    setMountedComponent(() => DynamicR3FBackground); // Update state with the component constructor
  }, []); // Empty dependency array ensures this runs once on mount

  // If the component hasn't been loaded into state yet, render a placeholder or null
  if (!MountedComponent) {
    return <div data-testid="r3f-waiting-for-component" style={{ display: 'none' }} />; // Or simply return null
  }

  // Render the dynamically loaded component
  return <MountedComponent />;
};

export default ClientOnlyMinecraftBlocksBackground;
