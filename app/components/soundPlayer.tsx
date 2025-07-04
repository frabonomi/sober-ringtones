'use client';

import styles from './soundPlayer.module.css';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { saEvent } from '../utils/saEvent';

type Props = {
  title: string;
  soundUrl: string;
};

export default function SoundPlayer({ title, soundUrl }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio === null) {
      return;
    }

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      if (audio === null) {
        return;
      }

      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>): void {
    if (e.code === 'Space') {
      e.preventDefault();
    }
    if (['Enter', 'Space'].includes(e.code)) {
      onTogglePlay();
    }
  }

  function onTogglePlay() {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      saEvent('ringtone played', { title });
    }
  }

  return (
    <div
      className={styles.soundPlayer}
      onClick={() => onTogglePlay()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button">
      <audio
        ref={audioRef}
        src={soundUrl}
        onEnded={() => {
          setIsPlaying(false);
        }}></audio>

      <div
        className={styles.soundPlayer__progressBar}
        style={{
          width: isPlaying ? `100%` : '0',
          transitionDuration: isPlaying ? `${audioRef.current?.duration}s` : '0s',
        }}></div>

      <div className={styles.soundPlayer__content}>
        <div className={styles.soundPlayer__playButton}>
          <svg
            className={styles.soundPlayer__playIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20px"
            height="20px">
            {!isPlaying ? <path d="M8 5v14l11-7z" /> : <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />}
          </svg>
        </div>

        <p className={styles.soundPlayer__title}>{title}</p>

        <a
          href={soundUrl}
          download
          className={styles.soundPlayer__download}
          onClick={(e) => {
            e.stopPropagation();
            saEvent('ringtone downloaded', { title });
          }}
          onKeyDown={(e) => e.stopPropagation()}
          aria-label={`Download ${title}`}
          title={`Download ${title}`}>
          <svg
            className={styles.soundPlayer__downloadIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            color="#000000">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0001 4.50001L13.0001 12.0857L14.293 10.7927L15.7072 12.2069L12.0001 15.9143L8.29297 12.2069L9.70723 10.7927L11.0001 12.0857L11.0001 4.50001H13.0001Z"
              fill="#000000"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.0001 19.5H5V17.5H19.0001V19.5Z"
              fill="#000000"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
