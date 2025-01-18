import styles from "./sectionTitle.module.css";

export default function SectionTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}
