
import React from 'react';

const BackgroundSVG = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="10" fill="#1E1022" opacity="0.1" />
            <path d="M0 0 L10 10 M10 0 L0 10" stroke="#33163A" stroke-width="0.2" opacity="0.2" />
          </pattern>
          <filter id="glow" x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox">
            <feGaussianBlur stdDeviation="1" />
          </filter>
          <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF00CC" />
            <stop offset="100%" stopColor="#FF33FF" />
          </linearGradient>
          <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0033FF" />
            <stop offset="100%" stopColor="#0099FF" />
          </linearGradient>
          <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9900FF" />
            <stop offset="100%" stopColor="#CC33FF" />
          </linearGradient>
        </defs>
        
        {/* Deep dark background */}
        <rect width="100%" height="100%" fill="#0F0817" />
        
        {/* Subtle gradient overlay */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Subtle glow effects that mimic the neon lights */}
        <g opacity="0.3">
          {/* Pink neon */}
          <rect x="5" y="95" width="20" height="1" fill="url(#neonPink)" filter="url(#glow)" />
          <rect x="10" y="90" width="15" height="1" fill="url(#neonPink)" filter="url(#glow)" />
          
          {/* Purple neon */}
          <rect x="40" y="95" width="20" height="1" fill="url(#neonPurple)" filter="url(#glow)" />
          
          {/* Blue neon */}
          <rect x="75" y="95" width="20" height="1" fill="url(#neonBlue)" filter="url(#glow)" />
        </g>
        
        {/* Subtle radial gradient in the center */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#33163A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0F0817" stopOpacity="0" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#centerGlow)" />
      </svg>
    </div>
  );
};

export default BackgroundSVG;
