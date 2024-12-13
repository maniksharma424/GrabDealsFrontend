import React from 'react';

interface LogoIconProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LogoIcon({ src, alt, className = '' }: LogoIconProps) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={`w-16 h-16 object-contain ${className}`}
    />
  );
}