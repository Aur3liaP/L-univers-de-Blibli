import { useState } from "react";
import MusicButton from "../components/MusicButton";
import flowerGardenAudio from "../assets/Howls Moving Castle - The Flower Garden.mp3";
import BackButton from "../components/BackButton";
import ModalGagne from "../components/ModalGagne";

function TestButton() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <MusicButton
        audioSrc={flowerGardenAudio}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
      {/* importer bon audio et modifier props */}
      <BackButton svgSrc="accueil" />
      {/* accueil ou immersion */}

      <button type="button" onClick={openModal}>
        Ouvrir Modal
      </button>
      <ModalGagne
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Bien joué !"
        text="Mettre le texte qu'on veut Blablablabla"
      />
    </div>
  );
}

export default TestButton;
