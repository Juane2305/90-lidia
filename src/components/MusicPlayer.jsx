import { useRef, useEffect } from 'react';
import song from '../assets/song.mp3'; 

const MusicPlayer = ({ autoPlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      // Attempt to play with user gesture already received
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay was prevented:', error);
        });
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      {/* Audio element - Replace URL with your preferred song */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={song}
      >
        {/* Fallback - Replace with your preferred romantic song */}
      </audio>

      {/* Floating Music Control Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black-light/80 backdrop-blur-sm border border-gold/50 text-gold flex items-center justify-center transition-all duration-300 hover:bg-gold/20 hover:border-gold hover:scale-110 shadow-lg"
        aria-label="Toggle music"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </button>
    </>
  );
};

export default MusicPlayer;
