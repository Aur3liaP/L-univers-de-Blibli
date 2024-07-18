import { useState, useEffect, useRef } from "react";
import Calcifer from "../components/Calcifer";
import Bubble from "../components/Bubble";
import WavesSvg from "../components/WavesSvg";
import MusicButton from "../components/MusicButton";
import BackButton from "../components/BackButton";
import MusicTotoro from "../assets/images/musictotoro.gif";
import LaputaAudio from "../assets/Laputa Castle in the Sky.mp3";
import MimiAudio from "../assets/Mimi Wo Sumaseba - Country Road.mp3";
import NausicaaAudio from "../assets/nausicaa (lalala).mp3";
import ModalGagne from "../components/ModalGagne";
import "../styles/BlindTest.css";

function BlindTest() {
  const [message, setMessage] = useState("De quel film vient la chanson?");
  const [music, setMusic] = useState(LaputaAudio);
  const [currentRound, setCurrentRound] = useState(1);
  const [countdown, setCountdown] = useState(3);
  const audioRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    if (countdown === 0) {
      setAutoPlay(true);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  function resetCountdown() {
    setCountdown(3);
    setAutoPlay(false);
  }

  function handleWin() {
    if (currentRound === 1) {
      setMessage("Bien joué ! De quel film vient celle-ci?");
      setMusic(NausicaaAudio);
      setCurrentRound(2);
      resetCountdown();
    } else if (currentRound === 2) {
      setMessage("Bien joué ! De quel film vient celle-ci?");
      setMusic(MimiAudio);
      setCurrentRound(3);
      resetCountdown();
    } else {
      setMessage(
        "Woah ! Tu t'y connais vraiment ! Continue d'explorer notre monde"
      );
      setIsModalOpen(true);
    }
  }

  function looseText() {
    setMessage("Hmmm essaie encore ...");
  }

  return (
    <div className="blindtest-bg">
      <WavesSvg />
      <Calcifer />
      <Bubble message={message} />
      <MusicButton
        ref={audioRef}
        audioSrc={music}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
      <BackButton svgSrc="immersion" />

      <div className="countdown">
        <p>{countdown > 0 ? countdown : "GO"}</p>
      </div>
      {currentRound === 1 && (
        <div className="rounds round1">
          <div
            className="answers answer1"
            onClick={handleWin}
            aria-hidden="true"
          >
            <p>Château dans le ciel</p>
          </div>
          <div
            className="answers answer2"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Voyage de Chihiro</p>
          </div>
          <div
            className="answers answer3"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Princesse Mononoké</p>
          </div>
          <div
            className="answers answer4"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Ponyo sur la falaise</p>
          </div>
        </div>
      )}
      {currentRound === 2 && (
        <div className="rounds round2">
          <div
            className="answers answer5"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Le Tombeau des lucioles</p>
          </div>
          <div
            className="answers answer6"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Pompoko</p>
          </div>
          <div
            className="answers answer7"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>La colline aux coquelicots</p>
          </div>
          <div
            className="answers answer8"
            onClick={handleWin}
            aria-hidden="true"
          >
            <p>Nausicaä de la vallée du vent</p>
          </div>
        </div>
      )}
      {currentRound === 3 && (
        <div className="rounds round3">
          <div
            className="answers answer9"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Mon voisin Totoro</p>
          </div>
          <div
            className="answers answer10"
            onClick={handleWin}
            aria-hidden="true"
          >
            <p>Si tu tends l'oreille</p>
          </div>
          <div
            className="answers answer11"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Le vent se lève</p>
          </div>
          <div
            className="answers answer12"
            onClick={looseText}
            aria-hidden="true"
          >
            <p>Le château ambulant</p>
          </div>
        </div>
      )}
      <ModalGagne
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Bravo !"
        text="Tu es vraiment un expert des musiques de Ghibli !"
      />
      <img src={MusicTotoro} alt="Totoro chantant" className="music-totoro" />
    </div>
  );
}

export default BlindTest;
