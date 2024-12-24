import React from 'react';
import { Globe } from 'lucide-react';

interface Props {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { code: 'ar', name: 'العربية' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' }
];

export const LanguageSelector: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5" />
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-transparent border border-red-500 rounded px-2 py-1 outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};