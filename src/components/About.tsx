import type { Skill } from '../types';
import styles from './About.module.css';

interface AboutProps {
  text: string;
  skills: Skill[];
}

const categoryLabels: Record<Skill['category'], string> = {
  language: 'Languages',
  framework: 'Frameworks & Libraries',
  tool: 'Tools & Platforms',
  database: 'Databases',
  cloud: 'Cloud & Hosting',
};

const categoryOrder: Skill['category'][] = ['language', 'framework', 'tool', 'database', 'cloud'];

export default function About({ text, skills }: AboutProps) {
  // Group skills by category
  const grouped = categoryOrder.reduce<Record<string, Skill[]>>((acc, cat) => {
    const items = skills.filter((s) => s.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>About</h2>

        <p className={styles.text}>{text}</p>

        <div className={styles.skillGroups}>
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <h3 className={styles.groupLabel}>
                {categoryLabels[category as Skill['category']]}
              </h3>
              <div className={styles.badges}>
                {items.map((skill) => (
                  <span key={skill.name} className={styles.badge}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
