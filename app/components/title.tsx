import styles from './title.module.css';

interface Props {
  size?: 'small';
  inheritColor?: boolean;
}

export default function Title({ size, inheritColor }: Props) {
  return (
    <span
      className={`${styles.title} ${size === 'small' && styles.small} ${inheritColor && styles.inheritColor}`}>
      Sober Ringtones
    </span>
  );
}
