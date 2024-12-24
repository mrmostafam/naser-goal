import React from 'react';
import { calculateTimeUnits } from '../utils/timeCalculations';
import { Trophy } from 'lucide-react';

interface Props {
  goalDate: Date;
  translations: {
    months: string;
    fridays: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export const TimeCounter: React.FC<Props> = ({ goalDate, translations }) => {
  const [time, setTime] = React.useState({
    months: 0,
    fridays: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0
  });

  React.useEffect(() => {
    const updateTime = () => {
      setTime(calculateTimeUnits(goalDate));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [goalDate]);

  return (
    <div className="relative">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <Trophy className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 animate-bounce" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 text-center">
        {[
          { value: time.months, label: translations.months },
          { value: time.fridays, label: translations.fridays },
          { value: time.totalHours, label: translations.hours },
          { value: time.totalMinutes, label: translations.minutes },
          { value: time.totalSeconds, label: translations.seconds }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`
              bg-gradient-to-br from-white to-gray-50 
              dark:from-gray-800 dark:to-gray-900 
              p-2 md:p-6 rounded-xl shadow-lg 
              border-2 border-red-500/20 hover:border-red-500 
              transition-colors duration-300
              ${index >= 3 ? 'col-span-1 md:col-span-1' : ''}
            `}
          >
            <div className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent leading-tight">
              {item.value.toLocaleString()}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};