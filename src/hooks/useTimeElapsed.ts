import { useState, useEffect } from 'react';
import type { TimeElapsed } from '../types';

const GOAL_DATE = new Date('2024-09-27T19:16:42');

export function useTimeElapsed(): TimeElapsed {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    months: 0,
    fridays: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now.getTime() - GOAL_DATE.getTime();

      // Calculate total values independently
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      
      // Calculate months
      const months = (now.getFullYear() - GOAL_DATE.getFullYear()) * 12 + 
                    (now.getMonth() - GOAL_DATE.getMonth());

      // Calculate total Fridays
      let fridayCount = 0;
      const tempDate = new Date(GOAL_DATE);
      while (tempDate <= now) {
        if (tempDate.getDay() === 5) fridayCount++;
        tempDate.setDate(tempDate.getDate() + 1);
      }

      setTimeElapsed({
        months,
        fridays: fridayCount,
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds
      });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeElapsed;
}