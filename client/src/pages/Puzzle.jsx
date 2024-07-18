import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PuzzleBoard from "../components/PuzzleBoard";
import BackButton from "../components/BackButton";
import MusicButton from "../components/MusicButton";
import Calcifer from "../components/Calcifer";
import Bubble from "../components/Bubble";
import background from "../assets/images/animated-background-house.mp4";
import OneSummersDay from "../assets/Chihiro - One Summers Day.mp3";

function Puzzle() {
  const [message, setMessage] = useState("Salut les amis!");
  const [autoPlay, setAutoPlay] = useState(true);

  function changeText() {
    setMessage("Jouez avec moi, et reconstituez l'image");
  }

  useGSAP(() => {
    gsap.delayedCall(5, changeText);
  });

  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="puzzle-container">
        <div className="puzzle">
          <PuzzleBoard />
          <Calcifer />
          <MusicButton
            autoPlay={autoPlay}
            setAutoPlay={setAutoPlay}
            audioSrc={OneSummersDay}
          />
          <Bubble message={message} />
        </div>
      </div>
      <BackButton svgSrc="immersion" />
    </div>
  );
}

export default Puzzle;
