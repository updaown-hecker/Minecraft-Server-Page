
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import the MinecraftBlocksBackground component
// This ensures it's only loaded on the client-side.
const ActualMinecraftBlocksBackground = dynamic(
  () => import('@/components/layout/MinecraftBlocksBackground'),
  {
    ssr: false, // Explicitly disable server-side rendering for this component
    loading: () => <div data-testid="r3f-loading-placeholder" style={{ display: 'none' }} />, // Placeholder while loading, can be null or styled
  }
);

const ClientOnlyMinecraftBlocksBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the component mounts
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render nothing (or a very simple placeholder) on the server or before client mount
    return <div data-testid="r3f-waiting-for-mount-placeholder" style={{ display: 'none' }} />;
  }

  // Once mounted on the client, render the dynamically imported component
  return <ActualMinecraftBlocksBackground />;
};

export default ClientOnlyMinecraftBlocksBackground;
