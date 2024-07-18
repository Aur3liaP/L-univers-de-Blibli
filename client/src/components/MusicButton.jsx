/* eslint-disable jsx-a11y/media-has-caption */
import "../styles/MusicButton.css";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function MusicButton({ audioSrc, autoPlay, setAutoPlay }) {
  const audioRef = useRef();
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (autoPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [autoPlay]);

  const playButton = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setAutoPlay(true);
      } else {
        audioRef.current.pause();
        setAutoPlay(false);
      }
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="music-button-container">
      <audio ref={audioRef} src={audioSrc} autoPlay={autoPlay} loop />
      <label className="container">
        <input type="checkbox" checked={autoPlay} onChange={playButton} />{" "}
        <svg
          viewBox="0 0 576 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="mute"
        >
          <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
        </svg>
        <svg
          viewBox="0 0 448 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="voice"
        >
          <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" />
        </svg>
      </label>

      <div className="slider">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="level"
          id="volumeSlider"
        />
      </div>
    </div>
  );
}

MusicButton.propTypes = {
  audioSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  autoPlay: PropTypes.bool,
  setAutoPlay: PropTypes.func.isRequired,
};

MusicButton.defaultProps = {
  autoPlay: false,
};

export default MusicButton;
