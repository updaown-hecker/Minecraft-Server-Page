"use client"; // Keep this if it was added to fix previous issues with styled-jsx

import HeroSection from '@/components/sections/hero/HeroSection';
import FeaturesSection from '@/components/sections/features/FeaturesSection';
import GameModesSection from '@/components/sections/gamemodes/GameModesSection';
import LoadingTipsDisplay from '@/components/sections/loading-tips/LoadingTipsDisplay';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const sectionAnimationClasses = "animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out";

  return (
    <div className="flex flex-col">
      <HeroSection /> {/* HeroSection likely has its own internal animations */}
      
      <section id="features" className={`py-16 sm:py-24 bg-background/70 backdrop-blur-md ${sectionAnimationClasses}`}>
        <FeaturesSection />
      </section>

      <section id="gamemodes" className={`py-16 sm:py-24 bg-background ${sectionAnimationClasses} [animation-delay:100ms]`}>
        <GameModesSection />
      </section>
      
      <section id="tips" className={`py-16 sm:py-24 bg-background/70 backdrop-blur-md ${sectionAnimationClasses} [animation-delay:200ms]`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LoadingTipsDisplay />
        </div>
      </section>
      
      <section id="store" className={`py-16 sm:py-24 bg-background text-center ${sectionAnimationClasses} [animation-delay:300ms]`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4 glow-primary">Store</h2>
          <p className="text-muted-foreground text-xl">Our store is coming soon! Get ready for exclusive items and perks.</p>
          <div className="mt-8 p-8 border-2 border-dashed border-accent rounded-lg max-w-md mx-auto">
            <p className="text-2xl font-semibold text-accent animate-pulse">Under Construction</p>
          </div>
        </div>
      </section>
      
      <Separator className="my-0 border-border/30"/>
      
      <section id="support" className={`py-16 sm:py-24 bg-background/80 backdrop-blur-sm text-center ${sectionAnimationClasses} [animation-delay:400ms]`}>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-accent mb-4 glow-accent">Support</h2>
          <p className="text-muted-foreground text-xl">Need help? Join our Discord or check out our support channels!</p>
          <p className="text-muted-foreground mt-2">For urgent matters, please create a ticket on our Discord server.</p>
        </div>
      </section>
    </div>
  );
}
