import type { Achievement } from '../types';
import styles from './Achievements.module.css';

interface AchievementsProps {
  achievements: Achievement[];
}

/** Icons for each achievement card */
const achievementIcons = ['🏢', '🧪', '📚', '🎓'];

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.container}>
        <h2 className={styles.heading}>Key Achievements</h2>

        <div className={styles.grid}>
          {achievements.map((item, i) => (
            <article key={i} className={styles.card}>
              <span className={styles.icon}>
                {achievementIcons[i % achievementIcons.length]}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
