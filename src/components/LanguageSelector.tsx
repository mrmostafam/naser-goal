import React from 'react';
import { Globe2 } from 'lucide-react';
import type { Language } from '../types';

interface LanguageSelectorProps {
  lang: Language;
  darkMode: boolean;
  onChange: (lang: Language) => void;
}

export function LanguageSelector({ lang, darkMode, onChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe2 className={`w-6 h-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
      <select
        value={lang}
        onChange={(e) => onChange(e.target.value as Language)}
        className={`p-2 rounded-lg transition-all duration-200 ${
          darkMode 
            ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' 
            : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'
        } border shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none`}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <option value="ar">العربية</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}