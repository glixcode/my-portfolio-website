/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Social / external link */
export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter';
}

/** Skill badge */
export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'cloud';
}

/** Achievement entry */
export interface Achievement {
  title: string;
  description: string;
}

/** Experience entry */
export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  description: string;
  techUsed?: string[];
}

/** Contribution graph cell */
export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;   // intensity level for color
}

/** Site-wide configuration */
export interface SiteConfig {
  name: string;
  role: string;
  bio: string;
  introduction: string;
  avatarUrl: string;
  aboutText: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  skills: Skill[];
  achievements: Achievement[];
  experience: Experience[];
}
