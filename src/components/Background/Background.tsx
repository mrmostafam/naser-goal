import React from 'react';
import { GradientOrb } from './GradientOrb';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Animated gradient orbs */}
      <GradientOrb 
        className="-rotate-12 top-20 left-10" 
        color="from-red-600/10 to-red-500/5"
        size="w-40 h-40"
      />
      <GradientOrb 
        className="rotate-12 top-40 right-10" 
        color="from-red-500/15 to-orange-500/5"
        size="w-32 h-32"
        blur="blur-3xl"
      />
      <GradientOrb 
        className="bottom-20 left-1/4" 
        color="from-orange-500/10 to-red-600/5"
        size="w-48 h-48"
        blur="blur-xl"
      />
      <GradientOrb 
        className="-rotate-45 bottom-10 right-1/4" 
        color="from-red-600/15 to-red-500/5"
        size="w-36 h-36"
      />

      {/* Light beam effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-500/5 to-transparent dark:via-red-500/10 transform -skew-y-12 opacity-50" />
    </div>
  );
};