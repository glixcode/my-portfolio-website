import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import type { SocialLink } from '../types';
import styles from './Contact.module.css';

interface ContactProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  twitter: GitHubIcon,
} as const;

export default function Contact({ socialLinks }: ContactProps) {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in touch</h2>
        <p className={styles.subtext}>
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out through any of the channels below.
        </p>

        <div className={styles.links}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                className={styles.contactLink}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <Icon size={22} className={styles.icon} />
                <div className={styles.linkInfo}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkHref}>
                    {link.href.replace('mailto:', '')}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
