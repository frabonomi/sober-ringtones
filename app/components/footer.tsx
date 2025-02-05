import Image from "next/image";
import styles from "./footer.module.css";

import ccLicenseImage from "../../public/by-sa.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        All ringtones were created by Francesco Bonomi and are distributed under
        the{" "}
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
    </footer>
  );
}
