import styles from './container.module.css';

import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  small?: boolean;
}>;

export default function Container({ children, small }: Readonly<Props>) {
  return <div className={`${styles.container} ${small && styles.containerSmall}`}>{children}</div>;
}
