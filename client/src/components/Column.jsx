import PropTypes from "prop-types";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Ghibliotheque.css";

function Column({ items, reverse, openModal }) {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const duration = 190;

    gsap.fromTo(
      wrapper,
      { yPercent: reverse ? -100 : 0 },
      {
        yPercent: reverse ? 0 : -100,
        ease: "none",
        duration,
        repeat: -1,
      }
    );
  }, [reverse]);

  return (
    <div className="image-column">
      <div className="image-wrapper" ref={wrapperRef}>
        {items.map((item) => (
          <img
            src={item.image}
            alt={item.title || item.name}
            key={item.id}
            onClick={() => openModal(item.id, item.filmId, item.type)} // Passez filmId et item.id
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
  reverse: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
};

Column.defaultProps = {
  reverse: false,
};

export default Column;
