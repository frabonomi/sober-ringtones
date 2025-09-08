'use client';

import styles from './themeToggle.module.css';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    return resolvedTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />;
  };

  const getLabel = () => {
    return resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  };

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={handleThemeChange}
      aria-label={getLabel()}
      title={getLabel()}>
      {getIcon()}
    </button>
  );
}
