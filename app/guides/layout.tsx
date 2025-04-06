import Link from "next/link";
import Container from "../components/container";
import styles from "./guides.module.css";
import { ArrowLeft } from "lucide-react";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.guides}`}>
      <Container small>
        <header>
          <Link href="/" className={styles.guides__backButton}>
            <ArrowLeft width={"1em"} />
            Back to Sober Ringtones
          </Link>
        </header>
      </Container>
      <article className={`styledLinks`}>
        <Container small>{children}</Container>
      </article>
    </div>
  );
}
