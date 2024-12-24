export function calculateTimeUnits(goalDate: Date) {
  const now = new Date();
  const diff = Math.abs(now.getTime() - goalDate.getTime());

  // Calculate total units independently
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(diff / (1000 * 60));
  const totalHours = Math.floor(diff / (1000 * 60 * 60));

  // Calculate months and Fridays
  const months = now.getMonth() - goalDate.getMonth() + 
    (12 * (now.getFullYear() - goalDate.getFullYear()));

  let fridays = 0;
  const tempDate = new Date(goalDate);
  while (tempDate <= now) {
    if (tempDate.getDay() === 5) {
      fridays++;
    }
    tempDate.setDate(tempDate.getDate() + 1);
  }

  return {
    months,
    fridays,
    totalHours,
    totalMinutes,
    totalSeconds
  };
}