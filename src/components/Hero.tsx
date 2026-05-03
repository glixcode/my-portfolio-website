import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './Icons';
import type { SocialLink } from '../types';
import styles from './Hero.module.css';

interface HeroProps {
  name: string;
  role: string;
  introduction: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
}

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  twitter: GitHubIcon, // fallback
} as const;

export default function Hero({ name, role, introduction, avatarUrl, socialLinks }: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.avatarWrap}>
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className={styles.avatar}
            width={280}
            height={280}
            loading="eager"
          />
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Available for hire</span>
          </div>
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.role}>{role}</p>
          <p className={styles.bio}>{introduction}</p>

          <div className={styles.actions}>
            <div className={styles.socials}>
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.socialLink}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <a
              href="/GilbertGucela.pdf"
              download
              className={styles.downloadBtn}
              aria-label="Download CV"
            >
              <DownloadIcon size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
