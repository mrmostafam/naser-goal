import React, { useState, useEffect } from 'react';
import { TimeUnit } from './components/TimeUnit';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggle } from './components/ThemeToggle';
import { useTimeElapsed } from './hooks/useTimeElapsed';
import { translations } from './translations';
import type { Language } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<Language>('ar');
  const timeElapsed = useTimeElapsed();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Red stripes */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-2 bg-red-600"></div>
        <div className="h-2 bg-red-600 mt-2"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="flex justify-between items-center mb-12">
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          <LanguageSelector 
            lang={lang} 
            darkMode={darkMode} 
            onChange={(newLang) => setLang(newLang)} 
          />
        </div>

        <div className="text-center" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 px-4">
            {t.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
            {[
              { value: timeElapsed.months, label: t.months },
              { value: timeElapsed.fridays, label: t.fridays },
              { value: timeElapsed.hours, label: t.hours },
              { value: timeElapsed.minutes, label: t.minutes },
              { value: timeElapsed.seconds, label: t.seconds }
            ].map((item, index) => (
              <TimeUnit
                key={index}
                value={item.value}
                label={item.label}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;