import styles from './githubIconLink.module.css';

import { Github, Star } from 'lucide-react';

export default function GithubIconLink() {
  return (
    <a
      className={styles.githubIconLink}
      href="https://github.com/frabonomi/sober-ringtones"
      target="_blank"
      rel="noreferrer"
      aria-label="View frabonomi/sober-ringtones on GitHub"
      title="View frabonomi/sober-ringtones on GitHub">
      <Github size={20} />
      <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">
        <Star size={11} fill="currentColor" strokeWidth={1.75} />
      </span>
      <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">
        <Star size={8} fill="currentColor" strokeWidth={1.75} />
      </span>
      <span className={`${styles.sparkle} ${styles.sparkleThree}`} aria-hidden="true">
        <Star size={14} fill="currentColor" strokeWidth={1.75} />
      </span>
    </a>
  );
}
