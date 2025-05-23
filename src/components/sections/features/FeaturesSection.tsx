"use client";

import { FEATURES_DATA, SERVER_NAME } from '@/lib/constants';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-text-shine">
              Core Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes {SERVER_NAME || "our server"} unique and exciting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
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

export default FeaturesSection;
