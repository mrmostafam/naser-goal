import React from 'react';
import { TimeCounter } from './components/TimeCounter/TimeCounter';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSelector } from './components/LanguageSelector';
import { Background } from './components/Background';
import { Confetti } from './components/Confetti';
import { PlayerImage } from './components/PlayerImage';
import { translations } from './i18n/translations';

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [lang, setLang] = React.useState('ar');

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Goal time: September 27, 2024, at 10:00 + 76:42 minutes
  const goalDate = new Date('2024-09-27T11:16:42');

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      <Background />
      <Confetti />
      
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
          <ThemeToggle 
            isDark={isDark} 
            onToggle={() => setIsDark(!isDark)} 
            translations={translations[lang]} 
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {translations[lang].title}
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 dark:text-gray-300">
              {translations[lang].description}
            </p>
          </div>

          <TimeCounter 
            goalDate={goalDate}
            translations={translations[lang]}
          />

          <PlayerImage translations={translations[lang]} />
        </div>
      </div>
    </div>
  );
}