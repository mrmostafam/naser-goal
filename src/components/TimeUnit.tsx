import React from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
  darkMode: boolean;
  index: number;
}

export function TimeUnit({ value, label, darkMode, index }: TimeUnitProps) {
  return (
    <div
      className={`p-6 rounded-2xl ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-700' 
          : 'bg-gradient-to-br from-white to-gray-50'
      } shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fadeIn`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${
        darkMode ? 'text-red-400' : 'text-red-600'
      }`}>
        {value.toLocaleString()}
      </div>
      <div className="text-sm md:text-base opacity-80 font-medium">
        {label}
      </div>
    </div>
  );
}