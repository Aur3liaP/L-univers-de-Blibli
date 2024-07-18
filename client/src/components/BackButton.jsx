import { Link } from "react-router-dom";
import "../styles/BackButton.css";
import PropTypes from "prop-types";
import home from "../assets/images/home.svg";
import forest from "../assets/images/forest.svg";

function BackButton({ svgSrc }) {
  switch (svgSrc) {
    case "accueil":
      return (
        <Link to="/Accueil">
          <button type="button" aria-label="Back" className="back-button">
            <img src={home} alt="go back" className="logo-back" />
          </button>
        </Link>
      );
    case "immersion":
      return (
        <Link to="/Immersion">
          <button type="button" aria-label="Back" className="back-button">
            <img src={forest} alt="go back" className="logo-back" />
          </button>
        </Link>
      );

    default:
      return null;
  }
}

BackButton.propTypes = {
  svgSrc: PropTypes.string.isRequired,
};

export default BackButton;
