import { useState } from "react";
import "../styles/OuEstCharlie.css";
import MusicButton from "../components/MusicButton";
import BackButton from "../components/BackButton";
import Calcifer from "../components/Calcifer";
import Bubble from "../components/Bubble";
import mononokeAudio from "../assets/Princess Mononoke -Yoshikazu Mela.mp3";
import ModalGagne from "../components/ModalGagne";

function OuEstCharlie() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [message, setMessage] = useState(
    "Bienvenue ! Je m'appelle Calcifer ! Nous allons jouer ensemble. Peux-tu trouver Totoro sur cette image ?"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [found, setFound] = useState("totoro");

  function changeText(etape) {
    console.info("coucou");
    switch (etape) {
      case "totoro":
        setMessage("Ok c'était facile ! Maintenant trouve Mr Navet");
        setFound("mr-navet");
        break;
      case "mr-navet":
        setMessage("Je vois que tu es doué ! Sauras-tu trouver le Baron ?");
        setFound("baron");
        break;
      case "baron":
        setMessage("Génial ! Encore un : peux-tu retrouver le sans-visage ?");
        setFound("sans-visage");
        break;
      case "sans-visage":
        setMessage("Bravo ! Allez pour finir, trouve l'homme-araignée");
        setFound("homme-araignee");
        break;
      case "homme-araignee":
        setMessage(
          "Félicitations ! Tu es très fort à ce jeu ! Continue donc à explorer notre monde. Bon voyage !"
        );
        break;
      default:
        break;
    }
  }

  return (
    <section className="bg-ou-est-charlie">
      <div className="ou-est-charlie">
        {found === "totoro" && (
          <div
            id="totoro"
            onClick={() => {
              changeText("totoro");
            }}
            aria-hidden="true"
          />
        )}
        {found === "mr-navet" && (
          <div
            id="mr-navet"
            onClick={() => {
              changeText("mr-navet");
            }}
            aria-hidden="true"
          />
        )}
        {found === "baron" && (
          <div
            id="baron"
            onClick={() => {
              changeText("baron");
            }}
            aria-hidden="true"
          />
        )}
        {found === "sans-visage" && (
          <div
            id="sans-visage"
            onClick={() => {
              changeText("sans-visage");
            }}
            aria-hidden="true"
          />
        )}
        {found === "homme-araignee" && (
          <div
            id="homme-araignee"
            onClick={() => {
              changeText("homme-araignee");
              openModal();
            }}
            aria-hidden="true"
          />
        )}
      </div>
      <Bubble message={message} />
      <Calcifer />
      <MusicButton
        audioSrc={mononokeAudio}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
      <ModalGagne
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Bien joué !"
        text="Tu as retrouvé tous les personnages ! Félicitations !"
      />
      <BackButton svgSrc="immersion" />
    </section>
  );
}

export default OuEstCharlie;
