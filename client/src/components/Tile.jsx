import PropTypes from "prop-types";

function Tile({ image, onClick }) {
  const handleClick = () => {
    onClick();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div
      className="tile"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {image && <img src={image} alt="Tile" />}
    </div>
  );
}

Tile.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Tile.defaultProps = {
  image: null,
};

export default Tile;
