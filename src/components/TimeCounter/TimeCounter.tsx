import React from 'react';
import { calculateTimeUnits } from '../../utils/timeCalculations';
import { Trophy } from 'lucide-react';
import { CounterBox } from './CounterBox';

interface TimeCounterProps {
  goalDate: Date;
  translations: {
    months: string;
    fridays: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export const TimeCounter: React.FC<TimeCounterProps> = ({ goalDate, translations }) => {
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

  const timeUnits = [
    { value: time.months, label: translations.months },
    { value: time.fridays, label: translations.fridays },
    { value: time.totalHours, label: translations.hours },
    { value: time.totalMinutes, label: translations.minutes },
    { value: time.totalSeconds, label: translations.seconds }
  ];

  return (
    <div className="relative">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
        <Trophy className="w-14 h-14 md:w-20 md:h-20 text-yellow-500 animate-bounce drop-shadow-lg" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-3 sm:px-4">
        {timeUnits.map((unit, index) => (
          <CounterBox
            key={index}
            value={unit.value}
            label={unit.label}
          />
        ))}
      </div>
    </div>
  );
};