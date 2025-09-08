'use client';

import GitHubButton from 'react-github-btn';

import { useTheme } from '../contexts/ThemeContext';

export default function GithubStarButton() {
  const { resolvedTheme } = useTheme();
  return (
    <GitHubButton
      href="https://github.com/frabonomi/sober-ringtones"
      data-color-scheme={resolvedTheme}
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star frabonomi/sober-ringtones on GitHub">
      Star on GitHub
    </GitHubButton>
  );
}
