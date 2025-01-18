import styles from "./container.module.css";

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.container}>{children}</div>;
}
