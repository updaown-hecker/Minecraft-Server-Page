
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Props for MinecraftBlocksBackground are defined in its own file and are optional with defaults.
// No need to redefine or pass a generic here unless specifically overriding types.
const DynamicMinecraftBlocksBackground = dynamic(
  () => import('@/components/layout/MinecraftBlocksBackground'),
  { 
    ssr: false,
    loading: () => null, // Explicitly provide a loading component (or null)
  }
);

const ClientOnlyMinecraftBlocksBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return <DynamicMinecraftBlocksBackground />;
};

export default ClientOnlyMinecraftBlocksBackground;
