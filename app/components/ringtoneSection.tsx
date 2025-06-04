import styles from './ringtoneSection.module.css';

import { codeSoundUrlMapping } from '../constants/codeSoundUrlMapping';
import Container from './container';
import SectionTitle from './sectionTitle';
import SoundPlayer from './soundPlayer';

type Props = {
  code: string;
  title: string;
};

export default function RingtoneSection({ code, title }: Props) {
  const audioFormat = 'mp3';

  return (
    <section className={`${styles.ringtoneSection} ${styles[`color${code}`]}`}>
      <Container>
        <h2 className={styles.ringtoneSection__code}>{code}</h2>
        <p className={styles.ringtoneSection__title}>{title}</p>
      </Container>

      <div className={styles.ringtoneSection__bg}>
        <Container>
          <div className={styles.ringtoneSection__rows}>
            <div className={styles.ringtoneSection__row}>
              <div className={styles.ringtoneSection__rowTitle}>
                <SectionTitle>Calls 🤙</SectionTitle>
              </div>
              <SoundPlayer
                title={`${code} - Call`}
                soundUrl={`${codeSoundUrlMapping[code].call}.${audioFormat}`}></SoundPlayer>
            </div>
            <div className={styles.ringtoneSection__row}>
              <div className={styles.ringtoneSection__rowTitle}>
                <SectionTitle>Notifications 🔔</SectionTitle>
              </div>
              <SoundPlayer
                title={`${code} - Notification`}
                soundUrl={`${codeSoundUrlMapping[code].notification}.${audioFormat}`}></SoundPlayer>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
