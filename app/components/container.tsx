import { PropsWithChildren } from "react";
import styles from "./container.module.css";

type Props = PropsWithChildren<{
  small?: boolean;
}>;

export default function Container({ children, small }: Readonly<Props>) {
  return (
    <div className={`${styles.container} ${small && styles.containerSmall}`}>
      {children}
    </div>
  );
}
