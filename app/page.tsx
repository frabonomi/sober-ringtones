import styles from "./page.module.css";
import Title from "./components/title";
import SectionTitle from "./components/sectionTitle";
import RingtoneSection from "./components/ringtoneSection";
import Container from "./components/container";
import Footer from "./components/footer";
import { ringtonesData } from "./constants/ringtonesMetadata";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Container>
          <p className={styles.page__intro}>
            a project by <a href="https://wize.io">wize.io</a>
          </p>

          <Title />

          <div className={`${styles.page__why} ${styles.page__section}`}>
            <SectionTitle>The why</SectionTitle>

            <div>
              <p className={styles.page__whyParagraph}>
                Ever found yourself listening to ringtones on your brand new
                phone and not being able to find one that wouldn't make you and
                everyone else around you cringe?
              </p>
              <p className={styles.page__whyParagraph}>
                On Sober Ringtones you can find a humble and modest ringtone for
                your phone calls and notifications.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.page__ringtones}>
          {Object.keys(ringtonesData).map((key) => (
            <RingtoneSection
              key={key}
              code={ringtonesData[key].code}
              title={ringtonesData[key].title}
            ></RingtoneSection>
          ))}
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
