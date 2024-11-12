import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-full transition-all duration-200 ${
        darkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-red-400' 
          : 'bg-white hover:bg-gray-100 text-red-600'
      } shadow-lg hover:shadow-xl transform hover:scale-105`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}