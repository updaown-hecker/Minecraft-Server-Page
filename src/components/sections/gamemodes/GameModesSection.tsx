"use client";

import { GAMEMODES_DATA } from '@/lib/constants';
import GameModeCard from './GameModeCard';

const GameModesSection = () => {
  return (
    <section id="gamemodes" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent animate-text-shine-alt">
              Upcoming Game Modes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get ready for new adventures! We're constantly developing exciting game modes for you.
          </p>
        </div>
        {/* Using a grid instead of a carousel for simplicity. A carousel would require a library or complex custom JS. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {GAMEMODES_DATA.map((gameMode) => (
            <GameModeCard key={gameMode.id} gameMode={gameMode} />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes text-shine-alt {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-shine-alt {
          background-size: 200% auto;
          animation: text-shine-alt 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GameModesSection;
