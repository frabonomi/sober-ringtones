import styles from "../guides.module.css";

import Image from "next/image";
import ccLicenseImage from "../../../public/by-sa.png";
import Link from "next/link";

export default async function AddCustomRingtoneIphonePage() {
  return (
    <>
      <h1 className={styles.guides__title}>
        How to add a custom ringtone on iPhone
      </h1>
      <p className={styles.guides__subtitle}>
        Learn how to set a custom ringtone for your calls or notifications from
        an audio file on iOS
      </p>

      <main className={styles.guides__main}>
        <p>
          To create a custom ringtone from an audio file on iOS right from your
          phone, you will need to use GarageBand.
        </p>

        <ol className={styles.guides__steps}>
          <li>
            Download the file you want to use as a ringtone. Check out{" "}
            <Link href={"/"}>Sober Ringtones</Link> if you're looking for a
            minimal and humble ringtone for your calls and notifications.
            <div className={styles.guides__imageContainer}>
              <Image
                src={ccLicenseImage}
                alt="CC BY-SA 4.0 license icon"
                style={{ width: "100px", height: "auto", opacity: 0.5 }}
                sizes="100px"
              ></Image>
            </div>
          </li>
          <li>
            If you don’t have GarageBand on your iPhone,{" "}
            <a
              href="https://apps.apple.com/us/app/garageband/id408709785"
              target="_blank"
            >
              download it from the App Store
            </a>
            .
          </li>
          <li>
            Once it's installed, touch and hold the GarageBand app icon until
            the menu appears, then tap <b>Create New Audio Recording</b>.
          </li>
          <li>
            On GarageBand, tap the <b>Tracks</b> button at the top of the screen
          </li>
          <li>
            Tap the instrument icon on the left to select the track, then tap
            the <b>Loops Browser</b> button at the top of the screen.
          </li>
          <li>
            Choose the track you want to use for a ringtone: tap <b>Files</b>,
            then tap <b>Browse items</b> from the Files app.
          </li>
          <li>
            Touch and hold the file, then drag the file all the way to the left
            in the Tracks view.
          </li>
          <li>
            Tap the <b>Navigation</b> button, then tap <b>My Songs</b>.
          </li>
          <li>
            In the browser, tap the <b>More button</b>, tap <b>Select</b>, then
            select the song you just created.
          </li>
          <li>
            Tap the <b>Share</b> button, then tap <b>Ringtone</b>.
          </li>
          <li>
            Enter a name for the ringtone, then tap <b>Export</b>.
          </li>
          <li>
            When the ringtone has finished exporting, tap <b>Use sound as</b>,
            then choose <b>Standard Ringtone</b> if you want to replace the
            current general ringtone, or choose <b>Text Tone</b> if you want to
            replace the existing general text tone.
          </li>
        </ol>
      </main>
    </>
  );
}
