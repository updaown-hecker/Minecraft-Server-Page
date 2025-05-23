import type React from 'react';

const SaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
    className={`w-8 h-8 ${props.className || ''}`}
  >
    <defs>
      <linearGradient id="saLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M30 85 L10 85 L10 15 L50 15 Q70 15 70 35 Q70 55 50 55 L30 55 L30 40 L50 40 Q60 40 60 35 Q60 30 50 30 L30 30 Z M90 85 L70 15 L90 15 L95 40 L80 85 Z"
      fill="url(#saLogoGradient)"
      stroke="hsl(var(--foreground))"
      strokeWidth="3"
    />
    {/* Simplified abstract 'A' - can be improved */}
     <path
      d="M60 85 L70 15 L80 15 L90 85 L75 85 L72 70 L68 70 L65 85 Z M70 30 L75 60 L65 60 Z"
      fill="url(#saLogoGradient)"
      stroke="hsl(var(--foreground))"
      strokeWidth="2"
    />
  </svg>
);

export default SaLogoIcon;
