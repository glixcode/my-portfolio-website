import type { SiteConfig } from '../types';

/**
 * Central configuration — edit this file to customise the portfolio.
 * All sections pull data from here, so there is a single source of truth.
 */
export const siteConfig: SiteConfig = {
  /* ── Hero ─────────────────────────────────────────────────── */
  name: 'Gilbert Gucela',
  role: 'Full Stack Developer',
  bio: 'Passionate about building clean, performant web applications. I love open-source, developer tools, and turning complex problems into elegant solutions.',
  introduction: `I’m passionate about continuous learning and currently exploring agentic AI to accelerate development and build smarter, more efficient software products.`,
  avatarUrl: '/me.png',

  /* ── Navigation ───────────────────────────────────────────── */
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],

  /* ── Social links ─────────────────────────────────────────── */
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'email' },
  ],

  /* ── About ────────────────────────────────────────────────── */
  aboutText:
    "With nearly 3 years of experience in software development, I specialize in building web and mobile applications with a focus on clean, maintainable, and scalable code. I hold a degree in Information Technology, majoring in Web and Mobile Application Development (2023).",

  skills: [
    // Languages
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'Go', category: 'language' },
    { name: 'PHP', category: 'language' },
    { name: 'HTML/CSS', category: 'language' },
    // Frameworks
    { name: 'React', category: 'framework' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Express', category: 'framework' },
    { name: 'Laravel', category: 'framework' },
    { name: 'Tailwind CSS', category: 'framework' },
    // Tools
    { name: 'Git', category: 'tool' },
    { name: 'Docker', category: 'tool' },
    { name: 'GitHub Actions', category: 'tool' },
    { name: 'Visual Studio Code', category: 'tool' },
    { name: 'Figma', category: 'tool' },
    // Databases
    { name: 'MySql', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Redis', category: 'database' },
    // Cloud
    { name: 'Render', category: 'cloud' },
    { name: 'Vercel', category: 'cloud' },
    { name: 'Netlify', category: 'cloud' },
  ],

  /* ── Achievements ─────────────────────────────────────────── */
  achievements: [
    {
      title: 'Professional Software Development Experience',
      description:
        'Applied and expanded my expertise as a full-time developer, working on real projects that involve full-stack development, troubleshooting, and collaborating with teams to deliver functional software solutions.',
    },
    {
      title: 'Hands-On Internship Experience',
      description:
        'Gained practical knowledge in software engineering through an intensive internship, contributing to real-world web applications and strengthening skills in both frontend and backend development.',
    },
    {
      title: 'Self-Learning Initiative',
      description:
        'Self-learned industry-standard technologies such as React, Node.js, MongoDB, and Express.js outside of formal education, demonstrating adaptability and a strong drive for continuous learning.',
    },
    {
      title: 'Capstone Project',
      description:
        'Independently developed a full-stack QR-based contact tracing and attendance system for Pangasinan State University using the MERN stack, featuring Google Maps integration and real-time contact tracking — all self-learned through personal initiative.',
    },
  ],

  /* ── Experience ───────────────────────────────────────────── */
  experience: [
    {
      role: 'Backend / Full Stack Developer',
      company: 'Trackerteer Web Dev Corp',
      companyUrl: 'https://trackerteer.com/',
      duration: 'Nov 2023 — Present',
      description:
        'Contributed to the development of multiple business-critical systems, including a BIR-accredited POS, a compliant e-Invoicing solution for Malaysian clients, an ordering platform, and a task management application. Primarily focused on backend development using Laravel—building APIs, implementing core business logic, and ensuring regulatory compliance—while also supporting frontend development with React and UI design.',
      techUsed: ['React', 'TypeScript', 'PHP', 'Laravel', 'Docker', 'Mysql'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Hooli Software',
      companyUrl: 'https://www.hoolisoftware.com/',
      duration: 'Feb 2021 — June 2023',
      description:
        'During my internship at Hooli Software, I collaborated with experienced software engineers on a production-level Software Composition Analysis (SCA) system. Working with Go, I contributed to feature development, enhancement, bug fixing, and ongoing maintenance of the backend. Through hands-on mentorship and guidance from senior engineers, I strengthened my skills in backend development, version control, and collaborative software engineering practices.',
      techUsed: ['Go', 'React.js', 'Docker', 'GitHub Actions', 'Typescript'],
    },
    {
      role: 'Lead Programmer',
      company: 'Pangasinan State University',
      companyUrl: '',
      duration: 'Oct 2022 — Feb 2023',
      description:
        'Developed a full-stack Contact Tracing and Attendance Monitoring System for the university as my college capstone project. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), I self-studied the entire technology stack since it was not part of the formal curriculum. The application enabled QR code-based check-in/out functionality for real-time tracking of close contacts between students and staff, automated attendance logging, and integrated Google Maps to visualize movement and identify potential exposure areas within the campus.',
      techUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'Github'],
    }
  ],
};
