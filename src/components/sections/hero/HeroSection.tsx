 "use client";

import { ChevronDown } from 'lucide-react';
import ServerStatus from './ServerStatus';
import AnimatedIPWidget from './AnimatedIPWidget';
import { Button } from '@/components/ui/button';
import { HERO_TITLE, HERO_SUBTITLE, JOIN_BUTTON_TEXT } from '@/lib/constants';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 relative overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 60%)",
      }}></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(ellipse at top left, hsl(var(--accent) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
      }}></div>
      
      <div className="z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight animate-in fade-in slide-in-from-top-10 duration-700 ease-out">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-text-shine">
            {HERO_TITLE}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out [animation-delay:300ms]">
          {HERO_SUBTITLE}
        </p>

        <div className="mb-8 animate-in fade-in duration-700 ease-out [animation-delay:600ms]">
          <ServerStatus />
        </div>

        <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-700 ease-out [animation-delay:900ms]">
          <AnimatedIPWidget />
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 glow-primary px-8 py-6 text-lg"
          >
            {/* This should open the same modal as navbar join button or scroll to instructions */}
            <Link href="#features">{JOIN_BUTTON_TEXT}</Link> 
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-in fade-in duration-700 ease-out [animation-delay:1200ms]">
        <Link href="#features" aria-label="Scroll to features">
          <ChevronDown className="w-10 h-10 text-muted-foreground animate-bounce hover:text-primary hover:glow-primary transition-colors duration-300 cursor-pointer" />
        </Link>
      </div>
      <style jsx global>{`
        @keyframes text-shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
