import React from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
  darkMode: boolean;
}

export function TimeUnit({ value, label, darkMode }: TimeUnitProps) {
  return (
    <div
      className={`p-6 rounded-lg ${
        darkMode ? 'bg-gray-800' : 'bg-gray-100'
      } shadow-lg transform hover:scale-105 transition-transform duration-200`}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{value}</div>
      <div className="text-sm md:text-base opacity-80">{label}</div>
    </div>
  );
}