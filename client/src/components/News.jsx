import "../styles/News.css";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import Moisy from "../assets/images/Moisy-crop.png";
import Escapade from "../assets/images/escapade.png";

function News() {
  const newsTitle = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -150,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 2,
        scrollTrigger: {
          trigger: elem,
          start: "top 50%",
          // markers: true,
          id: "title",
        },
      }
    );
  };

  const lineLeftToRight = (elem) => {
    gsap.fromTo(
      elem,
      {
        x: -2000,
      },
      {
        x: 0,
        delay: 0,
        duration: 2,
        scrollTrigger: {
          trigger: elem,
          start: "top 79%",
          // end: "bottom center",
          // scrub: true,
          // markers: true,
          id: "line",
        },
      }
    );
  };

  const newsBox = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 2,
        scrollTrigger: {
          trigger: elem,
          start: "top 115%",
          // markers: true,
          id: "news",
        },
      }
    );
  };

  useEffect(() => {
    newsTitle(".last-news");
  }, []);

  useEffect(() => {
    newsBox(".news-box-container");
  }, []);

  useEffect(() => {
    lineLeftToRight(".line");
  }, []);
  return (
    <div className="news-container">
      <h2 className="last-news">Dernières News</h2>
      <div className="line" />
      <div className="news-box-container">
        <div className="news-box">
          <div className="news-img">
            <img
              src="https://www.studioghibli.fr/wp-content/uploads/2024/07/boutique-ephemere-Ghibli-Lille-1024x714.jpg"
              alt="shop ghibli"
            />
          </div>
          <div className="news-infos">
            <h3>
              Une nouvelle boutique éphémère dédiée à l’univers du Studio Ghibli
              ouvre ses portes à Lille durant tout l’été
            </h3>
            <p>
              Avez-vous aperçu le changement dans la Rue Neuve à Lille ?
              L’enseigne de la boutique de goodies Harry Potter « The Wizard’s
              Shop » a laissé place à un nouveau pop-up store, […]
            </p>
            <a
              href="https://www.studioghibli.fr/une-nouvelle-boutique-ephemere-dediee-a-lunivers-du-studio-ghibli-ouvre-ses-portes-a-lille-durant-tout-lete/"
              target="blank"
            >
              Lire la suite »
            </a>
          </div>
        </div>
        <div className="news-box">
          <div className="news-img">
            <img src={Moisy} alt="shop ghibli" />
          </div>
          <div className="news-infos">
            <h3>
              Le prochain film d’Hayao Miyazaki pour le studio Ghibli sera un
              retour aux sources avec de l’aventure !
            </h3>
            <p>
              Changement de style pour le réalisateur japonais. Après une visite
              l'an dernier dans la ville de Moisy-sur-Methe […]
            </p>
            <a
              href="https://cdn-s-www.leprogres.fr/images/866793DE-521E-4830-99AD-89A636F81135/NW_raw/le-procureur-a-denonce-un-homme-extremement-violent-il-sera-toujours-comme-ca-photo-yves-salvat-1440354209.jpg"
              target="blank"
            >
              Lire la suite »
            </a>
          </div>
        </div>
        <div className="news-box">
          <div className="news-img">
            <img src={Escapade} alt="shop ghibli" />
          </div>
          <div className="news-infos">
            <h3>Le nouveau site Escapade est enfin sorti !</h3>
            <p>
              Une équipe de développeurs passionnés nous invite au voyage en
              nous faisant découvrir les villes de France qui ont été une source
              d'inspiration pour les films de […]
            </p>
            <a
              href="https://www.studioghibli.fr/une-nouvelle-boutique-ephemere-dediee-a-lunivers-du-studio-ghibli-ouvre-ses-portes-a-lille-durant-tout-lete/"
              target="blank"
            >
              Lire la suite »
            </a>
          </div>
        </div>
        <div className="news-box">
          <div className="news-img">
            <img
              src="https://www.studioghibli.fr/wp-content/uploads/2024/04/ghibli-palme-dor-dhonneur.jpg"
              alt="shop ghibli"
            />
          </div>
          <div className="news-infos">
            <h3>
              Une « Palme d’or d’honneur » pour le Studio Ghibli décernée lors
              du 77e Festival de Cannes !
            </h3>
            <p>
              Pour la première fois dans son histoire, le Festival de Cannes a
              décidé de récompenser non pas une personne, mais un groupe, en
              attribuant sa Palme d’or d’honneur au célèbre Studio Ghibli. […]
            </p>
            <a
              href="https://www.studioghibli.fr/une-nouvelle-boutique-ephemere-dediee-a-lunivers-du-studio-ghibli-ouvre-ses-portes-a-lille-durant-tout-lete/"
              target="blank"
            >
              Lire la suite »
            </a>
          </div>
        </div>
        <div className="news-box">
          <div className="news-img">
            <img
              src="https://www.studioghibli.fr/wp-content/uploads/2024/06/noeud-jiji-ghibli-header-1024x765.jpg"
              alt="shop ghibli"
            />
          </div>
          <div className="news-infos">
            <h3>
              Les personnages cultes du Studio Ghibli s’invitent dans vos
              cheveux avec ces 5 accessoires trop mignons
            </h3>
            <p>
              Le Studio Ghibli dévoile une collection de 5 accessoires pour
              cheveux inspirés des personnages cultes de ses dessins animés
              cultes. […]
            </p>
            <a
              href="https://www.studioghibli.fr/une-nouvelle-boutique-ephemere-dediee-a-lunivers-du-studio-ghibli-ouvre-ses-portes-a-lille-durant-tout-lete/"
              target="blank"
            >
              Lire la suite »
            </a>
          </div>
        </div>
        <div className="news-box">
          <div className="news-img">
            <img
              src="https://www.studioghibli.fr/wp-content/uploads/2024/05/Dvd-bluray-4k-Garcon-et-le-heron-France.jpg"
              alt="shop ghibli"
            />
          </div>
          <div className="news-infos">
            <h3>
              Les coffrets DVD, Blu-ray et 4K Ultra HD du film « Le Garçon et le
              héron » sont disponibles en précommande, sortie prévue le 4
              décembre en France
            </h3>
            <p>
              Beaucoup d’entre vous l’attendez avec impatience, la date de
              sortie en France des coffrets DVD, Blu-ray et 4K Ultra […]
            </p>
            <a
              href="https://www.studioghibli.fr/les-coffrets-dvd-blu-ray-et-4k-ultra-hd-du-film-le-garcon-et-le-heron-sont-disponibles-en-precommande-sortie-prevue-le-4-decembre-en-france/"
              target="blank"
            >
              Lire la suite »
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
