import React, { useEffect, useRef, useState } from "react";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import "../AudioPlayer/AudioPlayer.css";
import taj_audio from "../AudioPlayer/Audios/taj_audio.mp3";
import varanasi_full from "../AudioPlayer/Audios/varanasi_full.mp3";
import agra_full from "../AudioPlayer/Audios/agra_full.mp3";
import mathura_full from "../AudioPlayer/Audios/mathura_full.mp3";
import prayagraj_full from "../AudioPlayer/Audios/prayagraj_full.mp3";
import { useTranslation } from "react-i18next";

function AudioPlayer() {
  //  Language switch
  const { t, i18n } = useTranslation();

  //  Language switch
  // Audio Lists to play
  const audioList = [
    {
      title: "Track 1 - Taj Audio",
      audio: {
        en: require("../AudioPlayer/Audios/taj_audio_en.mp3"),
        hi: require("../AudioPlayer/Audios/taj_audio_hi.mp3"),
        es: require("../AudioPlayer/Audios/taj_audio_es.mp3"),
        de: require("../AudioPlayer/Audios/taj_audio_de.mp3"),
      },
    },
    {
      title: "Track 2 - Varansi",
      audio: {
        en: varanasi_full,
        hi: require("../AudioPlayer/Audios/taj_audio_hi.mp3"),
        es: require("../AudioPlayer/Audios/taj_audio_es.mp3"),
        de: require("../AudioPlayer/Audios/taj_audio_de.mp3"),
      },
    },
    {
      title: "Track 3 - Agra ",
      audio: {
        en: agra_full,
        hi: require("../AudioPlayer/Audios/taj_audio_hi.mp3"),
        es: require("../AudioPlayer/Audios/taj_audio_es.mp3"),
        de: require("../AudioPlayer/Audios/taj_audio_de.mp3"),
      },
    },
    {
      title: "Track 4 - Mathura",
      audio: {
        en: mathura_full,
        hi: require("../AudioPlayer/Audios/taj_audio_hi.mp3"),
        es: require("../AudioPlayer/Audios/taj_audio_es.mp3"),
        de: require("../AudioPlayer/Audios/taj_audio_de.mp3"),
      },
    },
    {
      title: "Track 5 - Prayagraj",
      audio: {
        en: prayagraj_full,
        hi: require("../AudioPlayer/Audios/taj_audio_hi.mp3"),
        es: require("../AudioPlayer/Audios/taj_audio_es.mp3"),
        de: require("../AudioPlayer/Audios/taj_audio_de.mp3"),
      },
    },
  ];
  // Audio Lists to play

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioList[currentTrackIndex].url));
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format time helper
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();
    const currentLang = i18n.language;
    const fallbackLang = "en";
    const track = audioList[currentTrackIndex];

    // Check if audio exists for selected language, otherwise fallback
    const audioUrl = track.audio[currentLang] || track.audio[fallbackLang];
    audioRef.current = new Audio(audioUrl);

    if (isPlaying) {
      audioRef.current.play();
    }

    const updateProgress = () => setProgress(audioRef.current.currentTime);
    const setAudioDuration = () => setDuration(audioRef.current.duration);

    audioRef.current.addEventListener("timeupdate", updateProgress);
    audioRef.current.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
      audioRef.current.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentTrackIndex, i18n.language]);

  // Check if audio exists for selected language, otherwise fallback

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % audioList.length;
    setCurrentTrackIndex(nextIndex);
  };

  const playPreviousTrack = () => {
    const prevIndex =
      (currentTrackIndex - 1 + audioList.length) % audioList.length;
    setCurrentTrackIndex(prevIndex);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seekAudio = (e) => {
    const audio = audioRef.current;
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setProgress(newTime);
  };

  const rewindAudio = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const forwardAudio = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(duration, audio.currentTime + 10);
  };

  return (
    <div>
      <div className="audio-player">
        <div className="audio-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/250px-Taj_Mahal_%28Edited%29.jpeg"
            alt="Audio cover"
          />
          <p
            className="poppins"
            style={{ marginBottom: "10px", marginTop: "10px" }}
          >
            {t("Introduction of Welcome to Taj Mahal")}
          </p>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <span>{formatTime(progress)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={progress}
            onChange={seekAudio}
            className="progress-slider"
          />
          <span>{formatTime(duration)}</span>
          {/* <p>
                <span>{audioList[currentTrackIndex].title}</span>
              </p> */}
        </div>

        {/* Controls */}
        <div className="controls">
          <button title="Download">
            <a
              href={
                audioList[currentTrackIndex].audio[i18n.language] ||
                audioList[currentTrackIndex].audio["en"]
              }
              download={`Track-${currentTrackIndex + 1}-${i18n.language}.mp3`}
              title="Download"
              className="icon"
            >
              <MdOutlineFileDownload style={{ fontSize: "40px" }} />
            </a>
          </button>
          {/* <button title="Prev" onClick={playPreviousTrack}>
            <span className="icon">
              <TbPlayerTrackPrevFilled />
            </span>
          </button> */}
          <button title="Prev" onClick={rewindAudio}>
            <span className="icon">
              <TbPlayerTrackPrevFilled />
            </span>
          </button>
          <button
            title="Play/Pause"
            className="play-btn"
            onClick={togglePlay}
            style={{ backgroundColor: "white" }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          {/* <button title="Next" onClick={playNextTrack}>
            <span className="icon">
              <TbPlayerTrackNextFilled />
            </span>
          </button> */}
          <button title="Next" onClick={forwardAudio}>
            <span className="icon">
              <TbPlayerTrackNextFilled />
            </span>
          </button>
          <button title="Menu">
            <span className="icon">
              <IoMdMenu />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
