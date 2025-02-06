"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./soundPlayer.module.css";
import { usePlayerProgress } from "../hooks/usePlayerProgress";

type Props = {
  title: string;
  soundUrl: string;
};

export default function SoundPlayer({ title, soundUrl }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = usePlayerProgress(audioRef);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current === null) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  });

  return (
    <div
      className={styles.soundPlayer}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <audio
        ref={audioRef}
        src={soundUrl}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
      ></audio>

      <div
        className={styles.soundPlayer__progressBar}
        style={{
          width: isPlaying ? `${progress}%` : "unset",
        }}
      ></div>

      <div className={styles.soundPlayer__content}>
        <div className={styles.soundPlayer__playButton}>
          {!isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20px"
              height="20px"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20px"
              height="20px"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}
