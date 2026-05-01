import { BriefcaseIcon } from './Icons';
import type { Experience } from '../types';
import styles from './ExperienceSection.module.css';

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <h2 className={styles.heading}>Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.entry}>
              {/* Timeline connector */}
              <div className={styles.connector}>
                <span className={styles.dot}>
                  <BriefcaseIcon size={14} />
                </span>
                {i < experiences.length - 1 && <span className={styles.line} />}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>

                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    className={styles.company}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className={styles.company}>{exp.company}</span>
                )}

                <p className={styles.description}>{exp.description}</p>

                {exp.techUsed && exp.techUsed.length > 0 && (
                  <div className={styles.techRow}>
                    {exp.techUsed.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
