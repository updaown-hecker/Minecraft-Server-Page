
"use client";

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react'; // Keep for state typing clarity
import { useState, useEffect } from 'react';

// Props for MinecraftBlocksBackground are optional or none, so 'any' is acceptable here for the dynamic import wrapper
const ClientOnlyMinecraftBlocksBackground = () => {
  const [MountedComponent, setMountedComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    // Dynamically import the component only on the client side after mount
    const MinecraftBlocksBackgroundComponent = dynamic(
      () => import('@/components/layout/MinecraftBlocksBackground'),
      {
        ssr: false, // Ensure it's not rendered on the server
        loading: () => null, // Render nothing while loading
      }
    );
    // Set the dynamically imported component to state
    setMountedComponent(() => MinecraftBlocksBackgroundComponent);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // If the component hasn't been loaded yet, render nothing
  if (!MountedComponent) {
    return null;
  }

  // Render the loaded component
  return <MountedComponent />;
};

export default ClientOnlyMinecraftBlocksBackground;
