import { BookIcon, StarIcon, ForkIcon, ExternalLinkIcon } from './Icons';
import type { Project } from '../types';
import styles from './Projects.module.css';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>Popular repositories</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <BookIcon size={16} className={styles.repoIcon} />
                <a
                  href={project.githubUrl}
                  className={styles.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
                <span className={styles.visibility}>Public</span>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.meta}>
                  <span className={styles.language}>
                    <span
                      className={styles.langDot}
                      style={{ backgroundColor: project.languageColor }}
                    />
                    {project.language}
                  </span>

                  {project.stars !== undefined && (
                    <span className={styles.stat}>
                      <StarIcon size={14} />
                      {project.stars.toLocaleString()}
                    </span>
                  )}

                  {project.forks !== undefined && (
                    <span className={styles.stat}>
                      <ForkIcon size={14} />
                      {project.forks.toLocaleString()}
                    </span>
                  )}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className={styles.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLinkIcon size={14} />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
