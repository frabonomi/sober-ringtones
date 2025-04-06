import styles from "./page.module.css";
import Title from "./components/title";
import SectionTitle from "./components/sectionTitle";
import RingtoneSection from "./components/ringtoneSection";
import Container from "./components/container";
import Footer from "./components/footer";
import { ringtonesData } from "./constants/ringtonesMetadata";
import Referrals from "./components/referrals";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Container>
          <p className={`${styles.page__intro} styledLinks`}>
            a project by <a href="https://wize.io">wize.io</a>
          </p>

          <Title />

          <div className={`${styles.page__why} ${styles.page__section}`}>
            <SectionTitle>The why</SectionTitle>

            <div>
              <p className={styles.page__paragraph}>
                Ever found yourself scrolling through ringtones on your
                brand-new phone, only to realize you can&apos;t find one that
                wouldn&apos;t make you and everyone around you cringe?
              </p>
              <p className={styles.page__paragraph}>
                On Sober Ringtones you can find a humble and minimal ringtone
                for your phone calls and notifications.
              </p>
            </div>
          </div>

          <div className={`${styles.page__section} styledLinks`}>
            <SectionTitle>How to guides</SectionTitle>

            <div>
              <p className={styles.page__paragraph}>
                Learn how to set a custom ringtone on{" "}
                <Link href={"/guides/add-custom-ringtone-iphone"}>iOS</Link> or{" "}
                <Link href={"/guides/add-custom-ringtone-android"}>
                  Android
                </Link>
                .
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

      <div className={`${styles.page__referrals}`}>
        <Container>
          <Referrals></Referrals>
        </Container>
      </div>

      <Footer></Footer>
    </div>
  );
}
