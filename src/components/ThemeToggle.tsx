import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface Props {
  isDark: boolean;
  onToggle: () => void;
  translations: {
    darkMode: string;
    lightMode: string;
  };
}

export const ThemeToggle: React.FC<Props> = ({ isDark, onToggle, translations }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 border border-red-500 rounded px-3 py-1"
      title={isDark ? translations.lightMode : translations.darkMode}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};