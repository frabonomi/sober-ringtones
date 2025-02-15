"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import styles from "./sharingButtons.module.css";

const sharingData = {
  url: "https://sober-ringtones.wize.io",
  quote:
    "Uncringe that ringtone. Check out Sober Ringtones and find a humble ringtone for your phone calls and notifications.",
};

export default function SharingButtons() {
  return (
    <div className={styles.sharingButtons}>
      <div className={styles.sharingButtons}>
        <FacebookShareButton url={sharingData.url} quote={sharingData.quote}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className={styles.sharingButtons}>
        <FacebookMessengerShareButton url={sharingData.url} appId={""}>
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </div>
      <div className={styles.sharingButtons}>
        <LinkedinShareButton url={sharingData.url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
      <div className={styles.sharingButtons}>
        <RedditShareButton url={sharingData.url} title={sharingData.quote}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
      <div className={styles.sharingButtons}>
        <TelegramShareButton url={sharingData.url} title={sharingData.quote}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>
      <div className={styles.sharingButtons}>
        <TwitterShareButton url={sharingData.url} title={sharingData.quote}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div className={styles.sharingButtons}>
        <WhatsappShareButton
          url={sharingData.url}
          title={sharingData.quote}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
