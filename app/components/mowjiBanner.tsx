'use client';

import styles from './mowjiBanner.module.css';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import { X } from 'lucide-react';

import { saEvent } from '../utils/saEvent';

const DISMISSED_KEY = 'mowjiBannerDismissed';
const SHOW_AFTER_MS = 10000;
const SCROLL_THRESHOLD_PX = 600;
const MOWJI_URL = 'https://mowji.app/?utm_source=sober-ringtones&utm_medium=banner';

const isDismissed = () => {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === '1';
  } catch {
    return false;
  }
};

export default function MowjiBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    if (isDismissed()) return;

    let timeElapsed = false;
    let hasScrolled = false;

    const maybeShow = () => {
      if (!timeElapsed || !hasScrolled) return;
      setVisible(true);
      saEvent('mowji_banner_shown');
      window.removeEventListener('scroll', onScroll);
    };

    const onScroll = () => {
      if (window.scrollY < SCROLL_THRESHOLD_PX) return;
      hasScrolled = true;
      maybeShow();
    };

    const timer = window.setTimeout(() => {
      timeElapsed = true;
      maybeShow();
    }, SHOW_AFTER_MS);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Step aside once the footer is on screen: it carries its own Mowji line,
  // and on phones the banner would otherwise sit right on top of it.
  useEffect(() => {
    if (!visible) return;
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting));
    observer.observe(footer);

    return () => observer.disconnect();
  }, [visible]);

  const persistDismissal = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1');
    } catch {
      // Storage unavailable: the banner may come back on the next page load.
    }
  };

  const dismiss = () => {
    saEvent('mowji_banner_dismissed');
    persistDismissal();
  };

  const handleClick = () => {
    saEvent('mowji_banner_clicked');
    persistDismissal();
  };

  if (!visible) return null;

  const hidden = dismissed || footerInView;

  return (
    <aside
      className={`${styles.banner} ${hidden ? styles.banner_hidden : ''}`}
      aria-label="Another project by the maker"
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}>
      <a
        href={MOWJI_URL}
        target="_blank"
        rel="noopener"
        className={styles.banner__link}
        onClick={handleClick}>
        <Image
          src="/mowji/mowji-app-icon.png"
          alt=""
          width={40}
          height={40}
          quality={90}
          className={styles.banner__icon}
        />
        <span className={styles.banner__text}>
          <span className={styles.banner__title}>Mowji</span>
          <span className={styles.banner__body}>
            A keyboard-first emoji picker for Mac, by the same maker.
          </span>
        </span>
      </a>
      <button
        type="button"
        className={styles.banner__close}
        onClick={dismiss}
        aria-label="Dismiss Mowji banner">
        <X size={16} aria-hidden="true" />
      </button>
    </aside>
  );
}
