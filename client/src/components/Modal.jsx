import "../styles/Modal.css";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, film }) {
  if (!isOpen || !film) return null;

  console.info(film);
  return (
    <section className="modal-container" onClick={onClose} aria-hidden>
      {film.director ? (
        <article
          className="modal"
          onClick={(e) => e.stopPropagation()}
          aria-hidden
        >
          <div className="modal-content">
            <div className="modal-image">
              <img src={film.image} alt={film.title} />
            </div>
            <div className="modal-infos">
              <div className="description">
                <h3>{film.original_title}</h3>
                <h2>{film.title}</h2>
                <p>{film.director}</p>
                <p>{film.release_date}</p>
                <p>{film.running_time} minutes</p>
              </div>
              <div className="separation" />
              <div className="synopsis">
                <p>{film.description}</p>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article
          className="modal-character"
          onClick={(e) => e.stopPropagation()}
          aria-hidden
        >
          <div className="modal-content-character">
            <div className="modal-image-character">
              <img src={film.image} alt={film.name} />
            </div>
            <div className="modal-infos-character">
              <h2>{film.name}</h2>
              <p>
                Genre : <span>{film.gender}</span>
              </p>
              <p>
                Age : <span>{film.age}</span>
              </p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  film: PropTypes.shape({
    image: PropTypes.string,
    original_title: PropTypes.string,
    title: PropTypes.string,
    director: PropTypes.string,
    release_date: PropTypes.string,
    running_time: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.string,
  }),
};

Modal.defaultProps = {
  film: null,
};

export default Modal;
