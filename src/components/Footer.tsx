import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {year} &middot; Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className={styles.link}>
            React
          </a>{' '}
          &amp;{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Vite
          </a>
        </p>
      </div>
    </footer>
  );
}
