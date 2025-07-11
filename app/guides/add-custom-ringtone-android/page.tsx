import styles from '../guides.module.css';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import mySoundsSelectImage from '../../../public/guides/android/my-sounds-select.png';
import mySoundsImage from '../../../public/guides/android/my-sounds.png';
import phoneRingtoneImage from '../../../public/guides/android/phone-ringtone.png';
import settingsImage from '../../../public/guides/android/settings.png';
import soundAndVibrationImage from '../../../public/guides/android/sound-vibration.png';

export const metadata: Metadata = {
  title: 'How to set a custom ringtone on Android - A step-by-step guide',
  description:
    'Learn how to add a custom ringtone for your calls or notifications from an audio file on you Android phone',
  openGraph: {
    title: 'How to set a custom ringtone on Android - A step-by-step guide',
    description:
      'Learn how to add a custom ringtone for your calls or notifications from an audio file on you Android phone',
    url: 'https://sober-ringtones.wize.io/guides/add-custom-ringtone-android',
    locale: 'en_US',
    type: 'website',
  },
};

export default async function AddCustomRingtoneAndroidPage() {
  return (
    <>
      <h1 className={styles.guides__title}>How to set a custom ringtone on Android</h1>
      <p className={styles.guides__subtitle}>
        Learn how to add a custom ringtone for your calls or notifications from an audio file on you
        Android phone
      </p>

      <main className={styles.guides__main}>
        <ol className={styles.guides__steps}>
          <li>
            Download the file you want to use as a ringtone. Check out{' '}
            <Link href={'/'}>Sober Ringtones</Link> if you&apos;re looking for a minimal and humble
            ringtone for your calls and notifications.
          </li>
          <li>
            Open <b>Settings</b>.
          </li>
          <li>
            Tap <b>Sounds & vibration</b>.
            <div
              className={`${styles.guides__imageContainer} ${styles.guides__imageContainerBottom}`}>
              <Image
                src={settingsImage}
                alt="sounds and vibration settings"
                style={{ width: '60%', height: 'auto' }}></Image>
            </div>
          </li>
          <li>
            Tap <b>Phone ringtone</b>.
            <div
              className={`${styles.guides__imageContainer} ${styles.guides__imageContainerBottom}`}>
              <Image
                src={soundAndVibrationImage}
                alt="phone ringtone settings"
                style={{ width: '60%', height: 'auto' }}></Image>
            </div>
          </li>
          <li>
            Tap <b>My Sounds</b>.
            <div
              className={`${styles.guides__imageContainer} ${styles.guides__imageContainerBottom}`}>
              <Image
                src={phoneRingtoneImage}
                alt="my sounds settings"
                style={{ width: '60%', height: 'auto' }}></Image>
            </div>
          </li>
          <li>
            Tap on the plus button to add a ringtone.
            <div className={`${styles.guides__imageContainer} ${styles.guides__imageContainerTop}`}>
              <Image
                src={mySoundsImage}
                alt="plus button to add a ringtone"
                style={{ width: '60%', height: 'auto' }}></Image>
            </div>
          </li>
          <li>Choose an audio file from your phone&apos;s internal storage.</li>
          <li>
            Tap on your newly added custom ringtone and hit <b>Save</b>.
            <div
              className={`${styles.guides__imageContainer} ${styles.guides__imageContainerBottom}`}>
              <Image
                src={mySoundsSelectImage}
                alt="choose your custom ringtone"
                style={{ width: '60%', height: 'auto' }}></Image>
            </div>
          </li>
          <li className={styles.guides__stepDone}>
            Done! Go back to <Link href={'/'}>Sober Ringtones</Link>.
          </li>
        </ol>
      </main>
    </>
  );
}
