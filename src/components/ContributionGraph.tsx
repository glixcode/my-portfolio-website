import { useMemo } from 'react';
import { generateContributionData } from '../utils/contributions';
import styles from './ContributionGraph.module.css';

/**
 * GitHub-style contribution / activity heatmap.
 * Uses mock data for demonstration — replace with real API data later.
 */
export default function ContributionGraph() {
  const weeks = useMemo(() => generateContributionData(), []);

  // Total contributions
  const total = useMemo(
    () => weeks.flat().reduce((sum, day) => sum + day.count, 0),
    [weeks],
  );

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Build month labels aligned to weeks
  const monthLabels = useMemo(() => {
    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const d = new Date(week[0].date);
      const m = d.getMonth();
      if (m !== lastMonth) {
        labels.push({ label: months[m], col: i });
        lastMonth = m;
      }
    });
    return labels;
  }, [weeks]);

  return (
    <section className={styles.section} id="activity">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {total.toLocaleString()} contributions in the last year
        </h2>

        <div className={styles.graphWrapper}>
          {/* Month labels row */}
          <div className={styles.monthRow}>
            <div className={styles.dayLabelSpacer} />
            <div className={styles.monthLabels}>
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  className={styles.monthLabel}
                  style={{ gridColumnStart: m.col + 1 }}
                >
                  {m.label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.graphBody}>
            {/* Day labels */}
            <div className={styles.dayLabels}>
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            {/* The grid */}
            <div className={styles.grid}>
              {weeks.map((week, wi) => (
                <div key={wi} className={styles.column}>
                  {week.map((day) => (
                    <div
                      key={day.date}
                      className={styles.cell}
                      data-level={day.level}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <span className={styles.legendLabel}>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={styles.cell} data-level={level} />
          ))}
          <span className={styles.legendLabel}>More</span>
        </div>
      </div>
    </section>
  );
}
