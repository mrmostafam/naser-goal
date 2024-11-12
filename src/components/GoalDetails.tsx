import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../types';

interface GoalDetailsProps {
  lang: Language;
  darkMode: boolean;
}

export function GoalDetails({ lang, darkMode }: GoalDetailsProps) {
  const t = translations[lang];
  
  return (
    <div className={`max-w-3xl mx-auto p-6 rounded-xl ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-700' 
        : 'bg-gradient-to-br from-white to-gray-50'
    } shadow-lg animate-fadeIn`}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        <div className="flex items-center gap-3">
          <Calendar className={`w-6 h-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          <span className="text-lg">{t.goalDate}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className={`w-6 h-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          <span className="text-lg">{t.goalTime}</span>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed opacity-90">
        {t.goalDescription}
      </p>
    </div>
  );
}