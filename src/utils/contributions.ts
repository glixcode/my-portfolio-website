import type { ContributionDay } from '../types';

/**
 * Generates 52 weeks × 7 days of mock contribution data,
 * simulating a realistic-looking GitHub contribution graph.
 */
export function generateContributionData(): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  const today = new Date();
  // Start from 52 weeks ago, on a Sunday
  const start = new Date(today);
  start.setDate(start.getDate() - (52 * 7) - start.getDay());

  for (let w = 0; w < 52; w++) {
    const week: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setDate(start.getDate() + w * 7 + d);

      // Pseudo-random using a simple hash of date for deterministic results
      const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
      const hash = Math.abs(Math.sin(seed) * 10000) % 1;

      let count: number;
      let level: 0 | 1 | 2 | 3 | 4;

      // Weekdays are more active than weekends
      const isWeekday = date.getDay() !== 0 && date.getDay() !== 6;
      const activityBoost = isWeekday ? 0.15 : 0;

      if (hash < 0.25 - activityBoost) {
        count = 0;
        level = 0;
      } else if (hash < 0.50) {
        count = Math.floor(hash * 4) + 1;
        level = 1;
      } else if (hash < 0.72) {
        count = Math.floor(hash * 8) + 3;
        level = 2;
      } else if (hash < 0.88) {
        count = Math.floor(hash * 12) + 6;
        level = 3;
      } else {
        count = Math.floor(hash * 20) + 10;
        level = 4;
      }

      week.push({
        date: date.toISOString().split('T')[0],
        count,
        level,
      });
    }
    weeks.push(week);
  }
  return weeks;
}
