import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ isOpen }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/lagudua.mp3"
        loop
      />
      <button
        onClick={togglePlay}
        className="fixed z-50 bottom-6 right-6 bg-white/80 hover:bg-gray-600 text-gray-900 rounded-full shadow-lg p-4 transition-all flex items-center justify-center"
        aria-label={playing ? "Pause music" : "Play music"}
        style={{ backdropFilter: "blur(4px)" }}
      >
        {playing ? (
          // Pause icon
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          // Play icon
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </button>
    </>
  );
}
