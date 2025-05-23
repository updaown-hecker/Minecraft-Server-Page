
"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import the component at the module scope.
// ssr: false is critical here to prevent server-side rendering attempts of the 3D component.
const ActualMinecraftBlocksBackground = dynamic(
  () => import('@/components/layout/MinecraftBlocksBackground'),
  { 
    ssr: false, 
    loading: () => null // Optional: provide a custom loading skeleton or null
  }
);

const ClientOnlyMinecraftBlocksBackground = () => {
  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    // This effect runs only once on the client after the component mounts.
    setIsClientMounted(true);
  }, []);

  // If not mounted yet (i.e., still on server or client hasn't run useEffect),
  // render nothing. This ensures ActualMinecraftBlocksBackground is only
  // rendered on the client after this wrapper component has mounted.
  if (!isClientMounted) {
    return null;
  }

  return <ActualMinecraftBlocksBackground />;
};

export default ClientOnlyMinecraftBlocksBackground;
