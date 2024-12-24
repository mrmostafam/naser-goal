import React from 'react';

interface GradientOrbProps {
  className?: string;
  color?: string;
  size?: string;
  blur?: string;
}

export const GradientOrb: React.FC<GradientOrbProps> = ({ 
  className = '', 
  color = 'from-red-600/10',
  size = 'w-32 h-32',
  blur = 'blur-2xl'
}) => {
  return (
    <div 
      className={`
        absolute rounded-full
        animate-pulse 
        bg-gradient-to-br ${color}
        ${size} ${blur} ${className}
      `}
    />
  );
};