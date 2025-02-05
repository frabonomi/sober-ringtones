import Image from "next/image";
import styles from "./footer.module.css";
import Container from "./container";

import ccLicenseImage from "../../public/by-sa.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          All ringtones are licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA 4.0
          </a>
        </p>
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          <Image
            src={ccLicenseImage}
            alt="CC BY-SA 4.0 license icon"
            style={{ width: "100px", height: "auto", opacity: 0.5 }}
            sizes="100px"
          ></Image>
        </a>
      </Container>
    </footer>
  );
}
