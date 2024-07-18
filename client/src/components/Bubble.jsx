/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "../styles/Bubble.css";

function Bubble({ message }) {
  return (
    <div className="bubble">
      <div className="speech-bubble bubble-bottom-left">
        <p>{message}</p>
      </div>
    </div>
  );
}

Bubble.propType = {
  message: PropTypes.string.isRequired,
};

export default Bubble;
