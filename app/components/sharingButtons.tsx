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
    "Check out Sober Ringtones and find a humble ringtone for your phone calls and notifications.",
};

export default function SharingButtons() {
  return (
    <div className={styles.sharingButtons}>
      <FacebookShareButton url={sharingData.url} quote={sharingData.quote}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={sharingData.url} appId={""}>
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <LinkedinShareButton url={sharingData.url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton url={sharingData.url} title={sharingData.quote}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton url={sharingData.url} title={sharingData.quote}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TwitterShareButton url={sharingData.url} title={sharingData.quote}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={sharingData.url}
        title={sharingData.quote}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
