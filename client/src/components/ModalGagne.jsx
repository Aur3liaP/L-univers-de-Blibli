/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import "../styles/ModalGagne.css";
import ModalGagneImg from "../assets/images/ModalGagne.png";
import openModalSound from "../assets/Popup.mp3";

function ModalGagne({ isOpen, onClose, title, text }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-gagne-overlay" onClick={onClose} aria-hidden="true">
      <div
        className="modal-gagne-content"
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        <button type="button" className="modal-gagne-close" onClick={onClose}>
          X
        </button>
        <img className="bg-modal" src={ModalGagneImg} alt={title} />

        <div className="bulle-modal-gagne">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <audio ref={audioRef} src={openModalSound} />
    </div>
  );
}

export default ModalGagne;

ModalGagne.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
