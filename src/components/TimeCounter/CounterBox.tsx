import React from 'react';

interface CounterBoxProps {
  value: number;
  label: string;
}

export const CounterBox: React.FC<CounterBoxProps> = ({ value, label }) => {
  // Calculate width class based on number length
  const getWidthClass = (num: number) => {
    const length = num.toString().length;
    if (length <= 2) return 'w-[110px] sm:w-[130px] md:w-[150px]';
    if (length <= 4) return 'w-[130px] sm:w-[150px] md:w-[170px]';
    return 'w-[150px] sm:w-[170px] md:w-[190px]';
  };

  // Calculate font size class based on number length
  const getFontSizeClass = (num: number) => {
    const length = num.toString().length;
    if (length <= 2) return 'text-4xl sm:text-5xl md:text-6xl';
    if (length <= 4) return 'text-3xl sm:text-4xl md:text-5xl';
    return 'text-2xl sm:text-3xl md:text-4xl';
  };

  return (
    <div 
      className={`
        relative overflow-hidden
        bg-gradient-to-br from-white to-gray-50 
        dark:from-gray-800 dark:to-gray-900 
        p-4 sm:p-5 md:p-6
        rounded-2xl
        shadow-[0_10px_20px_rgba(0,0,0,0.1)]
        dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
        border-2 border-red-500/20 
        hover:border-red-500 
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]
        dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]
        transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center 
        min-h-[100px] sm:min-h-[120px] md:min-h-[140px]
        ${getWidthClass(value)}
      `}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div 
        className={`
          ${getFontSizeClass(value)}
          font-bold 
          bg-gradient-to-r from-red-600 to-red-500 
          bg-clip-text text-transparent 
          text-center leading-tight 
          transition-all duration-300
          hover:scale-105 transform
        `}
      >
        {value.toLocaleString()}
      </div>
      <div className="text-sm sm:text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mt-2 text-center">
        {label}
      </div>
    </div>
  );
};