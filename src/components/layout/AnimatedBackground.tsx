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
            animationDelay: `${Math.random() * 15}s`, // Slightly different delay profile
            animationDuration: `${Math.random() * 15 + 20}s`, // Slightly different duration profile
            opacity: Math.random() * 0.3 + 0.1, // Slightly more visible
          }}
        />
      ))}
      {/* Subtle circuit lines placeholder */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => ( // Increased line count slightly
          <div
            key={`h-line-${i}`}
            className="absolute h-px bg-primary/50 animate-futuristic-line-pulse"
            style={{
              width: `${Math.random() * 60 + 20}%`, // Varied width
              left: `${Math.random() * 40}%`,
              top: `${i * (100/12)}%`, // Distribute more evenly
              animationDelay: `${Math.random() * 5}s`, 
              animationDuration: `${Math.random() * 7 + 8}s`, // Slower, more varied pulse
            }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => ( // Increased line count slightly
          <div
            key={`v-line-${i}`}
            className="absolute w-px bg-accent/50 animate-futuristic-line-pulse"
            style={{
              height: `${Math.random() * 60 + 20}%`, // Varied height
              top: `${Math.random() * 40}%`,
              left: `${i * (100/12)}%`, // Distribute more evenly
              animationDelay: `${Math.random() * 5 + 0.5}s`, // Offset delay from horizontal
              animationDuration: `${Math.random() * 7 + 9}s`, 
            }}
          />
        ))}
      </div>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/10 to-accent/10 opacity-75"></div>
       {/* This is a placeholder for a more complex 3D animated background. 
           Consider using libraries like Three.js or react-three-fiber for a full implementation.
      */}
    </div>
  );
};

export default AnimatedBackground;
