import Link from "next/link";
import Container from "../components/container";
import Title from "../components/title";
import styles from "./guides.module.css";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.guides}`}>
      <Container small>
        <header className={styles.guides__header}>
          <Link href="/">
            <Title size="small" />
          </Link>
        </header>
      </Container>
      <article className={`styledLinks`}>
        <Container small>{children}</Container>
      </article>
    </div>
  );
}
