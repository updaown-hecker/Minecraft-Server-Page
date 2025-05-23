
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Corrected import
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from '@/components/layout/NavigationBar';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import dynamic from 'next/dynamic'; // Added for dynamic import
import { SERVER_NAME } from '@/lib/constants';

const MinecraftBlocksBackground = dynamic(
  () => import('@/components/layout/MinecraftBlocksBackground'),
  { ssr: false }
);

const geistSans = Geist({ // Corrected variable name
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Corrected variable name
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${SERVER_NAME} - Minecraft Server`,
  description: 'Experience the future of Minecraft multiplayer. High-performance, modded, and evolving world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <AnimatedBackground />
        <MinecraftBlocksBackground /> {/* Now dynamically imported */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavigationBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
