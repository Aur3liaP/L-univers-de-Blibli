import { useState, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import "../styles/Ghibliotheque.css";
import Column from "../components/Column";
import Navbar from "../components/NavBar";
import Filter from "../components/Filter";
import News from "../components/News";
import Parallax from "../components/Parallax";
import Modal from "../components/Modal";
import TotoroWalking from "../assets/images/totoro-walking.gif";

function Ghibliotheque() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mergeFilmAndCharacters = (filmsTab) => {
    const mergedArray = [];

    filmsTab.forEach((film) => {
      mergedArray.push({
        type: "film",
        id: film.id,
        title: film.title,
        original_title: film.original_title,
        image: film.image,
        description: film.description,
        director: film.director,
        release_date: film.release_date,
        running_time: film.running_time,
      });

      film.characters.forEach((character) => {
        mergedArray.push({
          type: "character",
          id: character.id,
          filmId: film.id, // Ajout de l'ID du film ici
          name: character.name,
          gender: character.gender,
          age: character.age,
          image: character.image,
        });
      });
    });
    return mergedArray;
  };

  const openModal = (itemId, filmId, itemType) => {
    let url = "";
    if (itemType === "film") {
      url = `https://blibliapi.netlify.app/films/${itemId}`;
    } else if (itemType === "character") {
      url = `https://blibliapi.netlify.app/films/${filmId}/characters/${itemId}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedFilm(data);
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFilm(null);
  };

  const totoroWalking = (elem) => {
    gsap.fromTo(
      elem,
      {
        x: -350,
      },
      {
        x: 2200,

        delay: 0,
        duration: 60,
        repeat: -1,
        scrollTrigger: {
          trigger: elem,
          start: "top 95%",
          end: "top bottom",
          // markers: 1
        },
      }
    );
  };

  useEffect(() => {
    totoroWalking(".totoro-walking");
  }, []);

  useEffect(() => {
    fetch("https://blibliapi.netlify.app/films")
      .then((result) => result.json())
      .then(
        (data) =>
          console.info(mergeFilmAndCharacters(data)) ||
          setFilms(mergeFilmAndCharacters(data))
      );
  }, []);

  const handleSearch = (element) => {
    setSearchTerm(element.target.value);
  };

  const handleFilterChange = (element) => {
    setFilterType(element.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilterType("");
  };

  const filteredItems = films.filter((item) => {
    const matchesSearchTerm =
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilterType = filterType ? item.type === filterType : true;
    return matchesSearchTerm && matchesFilterType;
  });

  // algorithme de Fisher-Yates
  const shuffleArray = (array) => {
    const shuffledArray = [...array]; // Crée une copie du tableau original
    let i = shuffledArray.length; // Initialise i avec la longueur du tableau
    while (i > 1) {
      // Continue tant que i est supérieur à 1
      i -= 1; // Décrémente i de 1
      const j = Math.floor(Math.random() * (i + 1)); // Génère un index aléatoire entre 0 et i inclus
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Échange les éléments aux indices i et j
    }
    return shuffledArray;
  };

  return (
    <div id="library" className="library-container">
      <div className="header">
        <Navbar hideTitle />
        <div className="searchbar">
          <Filter
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            filterType={filterType}
            handleFilterChange={handleFilterChange}
            handleReset={handleReset}
          />
        </div>
      </div>

      <div className="gallery">
        <div className="image-container">
          <Column
            items={shuffleArray(filteredItems)}
            openModal={openModal}
            closeModal={closeModal}
          />
          <Column
            items={shuffleArray(filteredItems)}
            openModal={openModal}
            closeModal={closeModal}
            reverse
          />
          <Column
            items={shuffleArray(filteredItems)}
            openModal={openModal}
            closeModal={closeModal}
          />
          <Column
            items={shuffleArray(filteredItems)}
            openModal={openModal}
            closeModal={closeModal}
            reverse
          />
        </div>
      </div>
      <Parallax />
      <News />
      <img
        className="totoro-walking"
        src={TotoroWalking}
        alt="totoro walking"
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} film={selectedFilm} />
    </div>
  );
}

export default Ghibliotheque;
