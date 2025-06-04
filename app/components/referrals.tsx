import styles from './referrals.module.css';

import { TheVergeIcon } from './icons/the-verge';

export default function Referrals() {
  return (
    <section className={styles.referrals}>
      <p className={styles.referrals__paragraph}>As featured on</p>

      <ul className={styles.referrals__list}>
        <li>
          <a
            href="https://www.theverge.com/installer-newsletter/617653/best-music-apps-iphone-android-installer"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={styles.referrals__link}>
            <TheVergeIcon></TheVergeIcon>
          </a>
        </li>
      </ul>
    </section>
  );
}
