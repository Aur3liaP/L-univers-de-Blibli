/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import MusicButton from "../components/MusicButton";
import KikiAudio from "../assets/Kikis Delivery Service -Umi no Mieru Machi.mp3";
import BackButton from "../components/BackButton";
import ModalGagne from "../components/ModalGagne";
import Calcifer from "../components/Calcifer";
import Bubble from "../components/Bubble";
import Kiki from "../assets/images/kikibalais.png";
import Baron from "../assets/images/Baron.png";
import jiji from "../assets/images/Jiji.png";
import chatbus from "../assets/images/catBus.png";
import muta from "../assets/images/muta.png";
import roichat from "../assets/images/roichat.png";
import abdoucho from "../assets/images/abdoucho.png";
import MiaouSound from "../assets/MiaouSound.mp3";
import "../styles/QuiEstCe.css";

function QuiEstCe() {
  const audioRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [message, setMessage] = useState("Devine qui est Jiji ?");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setMessage("Tu l'as retrouvé !");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  function changeText() {
    setMessage("Hmmm essaie encore ...");
  }

  // Animations

  useGSAP(() => {
    const tlKiki = gsap.timeline({ delay: 9, duration: 1.5 });
    tlKiki
      .to(".baron", { opacity: 1, duration: 1.5 })
      .to(".muta", { opacity: 1, duration: 1.5 })
      .to(".roichat", { opacity: 1, duration: 1.5 })
      .to(".chatbus", { opacity: 1, duration: 1.5 })
      .to(".abdou", { opacity: 1, duration: 1.5 })
      .to(".jiji", { opacity: 1, duration: 1.5 });

    const pageAppear = () => {
      gsap.to(".kiki-page", {
        opacity: 1,
        duration: 2,
      });
    };

    const animateKiki = () => {
      gsap.to(".kikibalais", {
        x: "150%",
        duration: 3,
        force3D: true,
        ease: "sine.inOut",
      });

      gsap.to(".kikibalais", {
        y: "-50px",
        duration: 1,
        repeat: 2,
        yoyo: true,
        ease: "sine.inOut",
      });
    };
    const animateKiki2 = () => {
      gsap.to(".kikibalais", {
        x: "450%",
        delay: 4,
        duration: 5,
        force3D: true,
        ease: "sine.inOut",
        onComplete: pageAppear,
      });

      gsap.to(".kikibalais", {
        y: "-50px",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    animateKiki();
    animateKiki2();
  });

  const animateAbdou = () => {
    gsap.to(".abdou", {
      x: "250vh",
      y: "-80vh",
      duration: 3,
      force3D: true,
      ease: "sine.inOut",
    });

    gsap.to(".jiji", {
      x: "50vh",
      y: "-13vh",
      delay: 1.7,
      duration: 0.6,
      ease: "sine.inOut",
    });
  };

  function abdouText() {
    setMessage("Oh non ! Chabdou est parti en date avec Jiji !");
    animateAbdou();
    audioRef.current.play();
  }

  return (
    <div className="kiki-body">
      <MusicButton
        audioSrc={KikiAudio}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
      <BackButton svgSrc="immersion" />
      <img src={Kiki} alt="kiki la sorcière" className="kikibalais" />
      <section className="kiki-page">
        <Calcifer />
        <Bubble message={message} />
      </section>
      <img
        src={Baron}
        alt="le chat baron"
        className="chats baron"
        onClick={changeText}
        aria-hidden="true"
      />
      <img
        src={jiji}
        alt="le chat jiji"
        className="chats jiji"
        onClick={openModal}
        aria-hidden="true"
      />
      <img
        src={chatbus}
        alt="le chat bus"
        className="chats chatbus"
        onClick={changeText}
        aria-hidden="true"
      />
      <img
        src={muta}
        alt="le chat bus"
        className="chats muta"
        onClick={changeText}
        aria-hidden="true"
      />
      <img
        src={roichat}
        alt="le chat bus"
        className="chats roichat"
        onClick={changeText}
        aria-hidden="true"
      />
      <img
        src={abdoucho}
        alt="kiki la sorcière"
        className="chats abdou"
        onClick={abdouText}
        aria-hidden="true"
      />

      <ModalGagne
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Bien joué !"
        text="Tu as retrouvé Jiji le fidèle chat de Kiki la petite sorcière"
      />
      <audio ref={audioRef} src={MiaouSound} />
    </div>
  );
}

export default QuiEstCe;
