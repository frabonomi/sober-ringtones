"use client";

import GitHubButton from "react-github-btn";

export default function GithubStarButton() {
  return (
    <GitHubButton
      href="https://github.com/frabonomi/sober-ringtones"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star frabonomi/sober-ringtones on GitHub"
    >
      Star on GitHub
    </GitHubButton>
  );
}
