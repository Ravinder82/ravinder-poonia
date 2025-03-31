
import React from 'react';

const BackgroundSVG = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="10" fill="#1E293B" opacity="0.1" />
            <path d="M0 0 L10 10 M10 0 L0 10" stroke="#1E293B" stroke-width="0.2" opacity="0.2" />
          </pattern>
          <filter id="blur" x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="#0F172A" />
        <g opacity="0.6">
          <rect x="5" y="15" width="20" height="15" fill="#38BDF8" filter="url(#blur)" />
          <circle cx="70" cy="25" r="12" fill="#60A5FA" filter="url(#blur)" />
          <rect x="40" y="50" width="25" height="18" fill="#38BDF8" filter="url(#blur)" />
          <path d="M15 65 L35 80 L10 90 Z" fill="#60A5FA" filter="url(#blur)" />
          <circle cx="85" cy="70" r="15" fill="#38BDF8" filter="url(#blur)" />
          <rect x="60" y="40" width="15" height="22" fill="#60A5FA" filter="url(#blur)" />
          <path d="M5 25 L18 40 L0 45 Z" fill="#38BDF8" filter="url(#blur)" />
          <rect x="80" y="5" width="18" height="10" fill="#60A5FA" filter="url(#blur)" />
        </g>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default BackgroundSVG;
