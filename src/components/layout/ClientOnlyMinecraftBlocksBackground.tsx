
"use client";

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { useState, useEffect } from 'react';

// A simple props type for the component we are dynamically importing.
// MinecraftBlocksBackground uses optional props with defaults, so an empty object is fine here.
type MinecraftBlocksBackgroundComponentProps = {};

const ClientOnlyMinecraftBlocksBackground = () => {
  const [MountedR3FBackground, setMountedR3FBackground] = useState<ComponentType<MinecraftBlocksBackgroundComponentProps> | null>(null);

  useEffect(() => {
    // The dynamic import call is now inside useEffect.
    // This ensures it only runs on the client, after the initial mount.
    const DynamicComponent = dynamic(
      () => import('@/components/layout/MinecraftBlocksBackground'),
      {
        ssr: false, // Still important to prevent server-side attempts
        loading: () => null, // Render nothing while the component is loading
      }
    );
    // Store the dynamically imported component constructor in state.
    // The function form of setState is used to ensure we are setting the component itself, not calling it.
    setMountedR3FBackground(() => DynamicComponent);
  }, []); // Empty dependency array ensures this runs once on mount

  if (!MountedR3FBackground) {
    // If the component hasn't been loaded and set in state yet, render nothing.
    return null;
  }

  // Once loaded, render the dynamic component.
  return <MountedR3FBackground />;
};

export default ClientOnlyMinecraftBlocksBackground;
