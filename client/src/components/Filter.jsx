import { useState } from "react";
import PropTypes from "prop-types";
import chatImage from "../assets/images/chat.png";
import logoReinitialisation from "../assets/images/logoReinitialisation.png";
import MusicButton from "./MusicButton";
import alwaysWithMe from "../assets/Always With Me - Spirited Away.mp3";
import "../styles/Filter.css";

function Filter({
  handleSearch,
  searchTerm,
  filterType,
  handleFilterChange,
  handleReset,
}) {
  // const [selectedFilter, setSelectedFilter] = useState("filter");

  // const handleChange = (event) => {
  //   setSelectedFilter(event.target.value);
  // };

  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <div className="filter">
      <fieldset>
        <select
          id="menu"
          name="menu"
          value={filterType}
          onChange={handleFilterChange}
        >
          <option value="">Sélectionner</option>
          <option value="film">Films</option>
          <option value="character">Personnages</option>
        </select>
        <input
          type="search"
          id="site-search"
          name="q"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="button" onClick={handleReset}>
          <img
            src={logoReinitialisation}
            alt="logoReinitialisation"
            className="img-logoReinitialisation"
          />
        </button>
        <img src={chatImage} alt="chat" className="img-chatImage" />
      </fieldset>
      <MusicButton
        audioSrc={alwaysWithMe}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
    </div>
  );
}

Filter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Filter;
