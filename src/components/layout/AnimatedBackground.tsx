const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* Layer 1 Particles: More numerous, smaller, subtle */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={`particle-layer1-${i}`}
          className="absolute rounded-full bg-accent/30 animate-futuristic-drift"
          style={{
            width: `${Math.random() * 1.5 + 0.5}px`, // Range: 0.5px to 2px
            height: `${Math.random() * 1.5 + 0.5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`, // Wider delay range for less sync
            animationDuration: `${Math.random() * 20 + 25}s`, // Longer, more varied duration
            opacity: Math.random() * 0.2 + 0.05, // More subtle opacity
          }}
        />
      ))}
      {/* Layer 2 Particles: Fewer, slightly larger, different color tone */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={`particle-layer2-${i}`}
          className="absolute rounded-full bg-primary/20 animate-futuristic-drift"
          style={{
            width: `${Math.random() * 2.5 + 1}px`, // Range: 1px to 3.5px
            height: `${Math.random() * 2.5 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15 + 5}s`, // Ensure some delay
            animationDuration: `${Math.random() * 15 + 20}s`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        />
      ))}

      {/* Pulsing Energy Orbs */}
      <div
        className="absolute rounded-full bg-primary/40 animate-energy-pulse-primary"
        style={{
          width: 'clamp(100px, 20vw, 300px)',
          height: 'clamp(100px, 20vw, 300px)',
          left: '15%',
          top: '20%',
          animationDelay: '0s',
          animationDuration: '12s',
        }}
      />
      <div
        className="absolute rounded-full bg-accent/40 animate-energy-pulse-accent"
        style={{
          width: 'clamp(120px, 25vw, 350px)',
          height: 'clamp(120px, 25vw, 350px)',
          right: '10%',
          bottom: '15%',
          animationDelay: '2s',
          animationDuration: '14s',
        }}
      />
      <div
        className="absolute rounded-full bg-primary/30 animate-energy-pulse-primary"
        style={{
          width: 'clamp(80px, 15vw, 250px)',
          height: 'clamp(80px, 15vw, 250px)',
          right: '25%',
          top: '30%',
          animationDelay: '4s',
          animationDuration: '16s',
        }}
      />


      {/* Subtle circuit lines placeholder */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`h-line-${i}`}
            className="absolute h-px bg-primary/50 animate-futuristic-line-pulse"
            style={{
              width: `${Math.random() * 60 + 20}%`,
              left: `${Math.random() * 40}%`,
              top: `${i * (100/12)}%`,
              animationDelay: `${Math.random() * 5}s`, 
              animationDuration: `${Math.random() * 7 + 8}s`,
            }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`v-line-${i}`}
            className="absolute w-px bg-accent/50 animate-futuristic-line-pulse"
            style={{
              height: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 40}%`,
              left: `${i * (100/12)}%`,
              animationDelay: `${Math.random() * 5 + 0.5}s`,
              animationDuration: `${Math.random() * 7 + 9}s`, 
            }}
          />
        ))}
      </div>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/10 to-accent/10 opacity-75"></div>
    </div>
  );
};

export default AnimatedBackground;
