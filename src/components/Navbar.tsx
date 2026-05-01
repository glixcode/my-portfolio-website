import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, GitIcon } from './Icons';
import type { NavLink } from '../types';
import styles from './Navbar.module.css';

interface NavbarProps {
  links: NavLink[];
}

export default function Navbar({ links }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className={styles.header} id="navbar">
      <nav className={styles.nav}>
        {/* Logo / brand */}
        <a href="#" className={styles.brand} aria-label="Home">
          <GitIcon size={32} />
          <span className={styles.brandText}>Portfolio</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <ul className={styles.mobileMenu}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
