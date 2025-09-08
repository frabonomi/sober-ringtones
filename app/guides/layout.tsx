import styles from './guides.module.css';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import Container from '../components/container';
import Footer from '../components/footer';
import ThemeToggle from '../components/themeToggle';

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.guides}`}>
      <Container small>
        <header className={styles.guides__header}>
          <Link href="/" className={styles.guides__backButton}>
            <ArrowLeft width={'1em'} />
            Back to Sober Ringtones
          </Link>
          <ThemeToggle />
        </header>
      </Container>
      <article className={`styledLinks`}>
        <Container small>{children}</Container>
      </article>
      <Container small>
        <Footer></Footer>
      </Container>
    </div>
  );
}
