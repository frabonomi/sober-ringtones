import styles from "../guides.module.css";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import homeScreenImage from "../../../public/guides/ios/home-screen.png";
import tracksButtonImage from "../../../public/guides/ios/tracks-button.png";
import loopsImage from "../../../public/guides/ios/loop-button.png";
import filesImage from "../../../public/guides/ios/files.png";
import filesSelectImage from "../../../public/guides/ios/files-select.png";
import dragFileImage from "../../../public/guides/ios/drag-file.png";
import timelineImage from "../../../public/guides/ios/timeline.png";
import mySongsImage from "../../../public/guides/ios/my-songs.png";
import holdSongImage from "../../../public/guides/ios/hold-song.png";
import shareImage from "../../../public/guides/ios/share.png";
import exportImage from "../../../public/guides/ios/export.png";
import useAsImage from "../../../public/guides/ios/use-sound-as.png";
import useAsSelectImage from "../../../public/guides/ios/use-sound-as-select.png";
import ringtoneImage from "../../../public/guides/ios/ringtone.png";

export const metadata: Metadata = {
  title: "How to set a custom ringtone on iPhone - A step-by-step guide",
  description:
    "Learn how to add a custom ringtone for your calls or notifications from an audio file on you iPhone",
  openGraph: {
    title: "How to set a custom ringtone on iPhone - A step-by-step guide",
    description:
      "Learn how to add a custom ringtone for your calls or notifications from an audio file on you iPhone",
    url: "https://sober-ringtones.wize.io/guides/add-custom-ringtone-iphone",
    locale: "en_US",
    type: "website",
  },
};

export default async function AddCustomRingtoneIphonePage() {
  return (
    <>
      <h1 className={styles.guides__title}>
        How to add a custom ringtone on iOS
      </h1>
      <p className={styles.guides__subtitle}>
        Learn how to set a custom ringtone for your calls or notifications from
        an audio file on your iPhone
      </p>

      <main className={styles.guides__main}>
        <p>
          To create a custom ringtone from an audio file on iOS right from your
          phone, you will need to use GarageBand.
        </p>

        <ol className={styles.guides__steps}>
          <li>
            Download the file you want to use as a ringtone. Check out{" "}
            <Link href={"/"}>Sober Ringtones</Link> if you&apos;re looking for a
            minimal and humble ringtone for your calls and notifications.
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
            Once it&apos;s installed, touch and hold the GarageBand app icon
            until the menu appears, then tap <b>Create New Audio Recording</b>.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={homeScreenImage}
                alt="touch and hold the GarageBand app icon then tap Create New Audio Recording"
                style={{ width: "70%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            On GarageBand, tap the <b>Tracks</b> button at the top of the screen
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={tracksButtonImage}
                alt="Tracks button on GarageBand"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Tap the instrument icon on the left to select the track, then tap
            the <b>Loops Browser</b> button at the top of the screen.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={loopsImage}
                alt="Loop browser button on GarageBand"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Choose the track you want to use for a ringtone: tap <b>Files</b>,
            then tap <b>Browse items</b> from the Files app.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={filesImage}
                alt="browser on GarageBand"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={filesSelectImage}
                alt="files browser on GarageBand"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Touch and hold the file, then drag the file all the way to the left
            in the Tracks view.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={dragFileImage}
                alt="touch and hold the file"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Place it at the beginning of the track.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={timelineImage}
                alt="Place it at the beginning of the track"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Tap the <b>Navigation</b> button, then tap <b>My Songs</b>.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={mySongsImage}
                alt="My Songs button on GarageBand"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            In the browser, tap and hold the song you just created, then tap the{" "}
            <b>Share</b> button.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={holdSongImage}
                alt="tap and hold the song you just created"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={shareImage}
                alt="tap the Share button"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Tap <b>Ringtone</b>.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={ringtoneImage}
                alt="tap Ringtone"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            Enter a name for the ringtone, then tap <b>Export</b>.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={exportImage}
                alt="tap export"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
          <li>
            When the ringtone has finished exporting, tap <b>Use sound as</b>,
            then choose <b>Standard Ringtone</b> if you want to replace the
            current general ringtone, or choose <b>Text Tone</b> if you want to
            replace the existing general text tone.
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={useAsImage}
                alt="tap use sound as"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
            <div className={`${styles.guides__imageContainer}`}>
              <Image
                src={useAsSelectImage}
                alt="choose Standard Ringtone or Text Tone"
                style={{ width: "100%", height: "auto" }}
              ></Image>
            </div>
          </li>
        </ol>
      </main>
    </>
  );
}
