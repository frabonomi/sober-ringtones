import { RefObject, useEffect, useState } from "react";

export function usePlayerProgress(
  audioRef: RefObject<HTMLAudioElement | null>
): [number, typeof setProgress] {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current === null) {
      return;
    }

    const interval = setInterval(() => {
      if (audioRef.current === null) {
        clearInterval(interval);
        return;
      }

      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }, 50);

    return () => clearInterval(interval);
  });

  return [progress, setProgress];
}
