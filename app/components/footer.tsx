import styles from "./footer.module.css";

import SharingButtons from "./sharingButtons";
import GithubStarButton from "./githubStarButton";
import Title from "./title";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__sharing}>
        <p className={styles.footer__paragraph}>
          Help a friend, share this project
        </p>
        <SharingButtons></SharingButtons>

        <p className={styles.footer__starOnGitHub}>
          <GithubStarButton></GithubStarButton>
        </p>
      </div>

      <div className={styles.footer__info}>
        <Link href="/" className={styles.footer__logo}>
          <Title size="small" inheritColor></Title>
        </Link>
        <p className={styles.footer__license}>
          All ringtones were created by{" "}
          <a href="https://wize.io">Francesco Bonomi</a> and are distributed
          under the{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
          </a>{" "}
          license.
        </p>
      </div>
    </footer>
  );
}
