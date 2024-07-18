import { useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Modal from "./Modal";

function TestCard({ src, alt }) {
  const [modalOpen, setModalOpen] = useState(false);

  //   Déclaration du composant TestCard : Prend deux props, src (source de l'image) et alt (texte alternatif pour l'image).
  // État local modalOpen : Utilisé pour gérer l'état d'ouverture ou de fermeture de la modal

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setModalOpen(true);
    }
  };

  // Fonction handleKeyDown : Gère les événements de touche pour ouvrir la modal lorsque la touche "Enter" ou "Espace" est pressée.

  return (
    <div className="image-container">
      <button
        type="button"
        className="img-open-button"
        onClick={() => setModalOpen(true)}
        onKeyDown={handleKeyDown}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <img src={src} alt={alt} className="img-open" />
      </button>

      {/* Bouton : Enveloppe l'image et permet d'ouvrir la modal par un clic ou par une touche (gérée par handleKeyDown).
Image : Affichée à partir de la prop src avec le texte alternatif alt */}
      {modalOpen &&
        createPortal(
          <Modal closeModal={() => setModalOpen(false)}>
            <img src={src} alt={alt} className="modal-image" />
            <div className="modal-description">
              <h1>{alt}</h1>
              <p>Description de l'image ici.</p>
            </div>
          </Modal>,
          document.body
        )}
      {/* Utilise createPortal pour rendre la modal en dehors de l'élément parent dans le DOM.
Affiche une image et une description.
Passe la fonction closeModal comme prop pour fermer la modal. */}
    </div>
  );
}

TestCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// Définissent les types des props src et alt comme des chaînes de caractères obligatoires

export default TestCard;
