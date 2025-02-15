import Image from "next/image";
import styles from "./footer.module.css";

import ccLicenseImage from "../../public/by-sa.png";
import Container from "./container";
import SharingButtons from "./sharingButtons";

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.footer__sharing}>
          <p className={styles.footer__paragraph}>
            Help a friend, share this project
          </p>
          <SharingButtons></SharingButtons>
        </div>

        <div className={styles.footer__license}>
          <p className={styles.footer__paragraph}>
            All ringtones were created by{" "}
            <a href="https://wize.io">Francesco Bonomi</a> and are distributed
            under the{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)
            </a>{" "}
            license.
          </p>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            <Image
              src={ccLicenseImage}
              alt="CC BY-SA 4.0 license icon"
              style={{ width: "100px", height: "auto", opacity: 0.5 }}
              sizes="100px"
            ></Image>
          </a>
        </div>
      </footer>
    </Container>
  );
}
