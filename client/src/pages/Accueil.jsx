import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { HashLink } from "react-router-hash-link";
import "../styles/Accueil.css";
import swanp from "../assets/images/St-Ghibli.jpg";
import petitTotoro from "../assets/images/petitTotoro.png";
import biblighibli from "../assets/images/biblighibli3.png";
import susuwatari from "../assets/images/susuwatari.png";
// import cadre from "../assets/images/cadreTexte.png";
import studioGhibli from "../assets/images/StudioGhibli.png";
import NavBar from "../components/NavBar";
import FooterCredit from "../components/FooterCredit";
import Totoro from "../assets/images/totoroparapluie.png";
import Feuilles from "../assets/images/feuilles3.png";
import Feuilles2 from "../assets/images/feuilles 4.png";
import Feuilles3 from "../assets/images/feuilles2.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Accueil() {
  // Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apparition Scroll
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 1,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 1,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 1,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  const appear = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: delay || 0.4,
        duration: duration || 4,
        scrollTrigger: {
          trigger: elem,
        },
      }
    );
  };

  useEffect(() => {
    slideInTop(".rectangle-bleu");
  }, []);
  useEffect(() => {
    slideInLeft(".accueil-text");
  }, []);
  useEffect(() => {
    slideInRight(".studioGhibli");
  }, []);
  useEffect(() => {
    slideInTop(".button-container");
  }, []);
  useEffect(() => {
    appear(".leaves");
  }, []);

  return (
    <div className="accueil">
      <section className="parallax-accueil row-div">
        <img src={swanp} alt="swanp accueil" className="full-width-image" />
        <NavBar />
        <img
          src={Totoro}
          alt="parallaxAccueil"
          className="parallax-layers parallax-totoro"
          style={{ transform: `translateY(${offsetY * 1}px)` }}
        />
        <img
          alt="parallaxAccueil"
          className="parallax-layers clouds accueil-cloud1"
          src="http://cinemont.com/tutorials/howls/cloud-1.png"
          style={{ transform: `translateX(${offsetY * -0.8}px)` }}
        />
        <img
          alt="parallaxAccueil"
          className="parallax-layers accueil-cloud-shadow1"
          src="http://cinemont.com/tutorials/howls/cloud_shadow-1.png"
          style={{ transform: `translateX(${offsetY * -0.8}px)` }}
        />
        <img
          alt="parallaxAccueil"
          className="parallax-layers clouds accueil-cloud2"
          src="http://cinemont.com/tutorials/howls/cloud-2.png"
          style={{ transform: `translateX(${offsetY * 0.8}px)` }}
        />
        <img
          alt="parallaxAccueil"
          className="parallax-layers accueil-cloud-shadow2"
          src="http://cinemont.com/tutorials/howls/cloud_shadow-1.png"
          style={{ transform: `translateX(${offsetY * 0.8}px)` }}
        />
      </section>

      <section className="rectangle-bleu row-div">
        <div className="accueil-text">
          {/* <img
            src={cadre}
            alt="cadre texte accueil"
            className="cadre-accueil"
          /> */}

          <h2>
            Plongez dans la Magie des Studios Ghibli:
            <br />
            Une Exploration Fascinante et Ludique
          </h2>

          <p>
            Plongez dans l'enchantement intemporel des studios Ghibli avec notre
            exploration détaillée et ludique. Que vous soyez un novice curieux
            ou un fan de longue date,
            <br />
            préparez-vous à (re)découvrir la magie de ce studio d'animation
            légendaire. À travers une mine d'informations fascinantes et une
            immersion interactive, nous vous invitons à voyager dans les mondes
            merveilleux créés par Hayao Miyazaki et son équipe talentueuse.
            <br />
            Rejoignez-nous pour une aventure cinématographique unique et
            découvrez pourquoi l'univers Ghibli continue de captiver les cœurs
            et les esprits à travers le monde.
          </p>
        </div>
        <img src={susuwatari} alt="susuwatari" className="susuwatari accueil" />
        <img
          src={studioGhibli}
          alt="studioGhibli "
          className="studioGhibli accueil"
        />
      </section>

      <section className="robot-container">
        <img src={Feuilles} alt="leaves" className="leaves feuilles1" />
        <img src={Feuilles2} alt="leaves" className="leaves feuilles2" />
        <img src={Feuilles3} alt="leaves" className="leaves feuilles3" />

        <div className="button-container">
          <Link to="/VoyageTotoro">
            <div className="button-redirection">
              <img src={petitTotoro} alt="petitTotoro accueil" />
              <h1>
                Voyage <br />
                avec Totoro
              </h1>
            </div>
          </Link>

          <HashLink to="/Ghibliotheque#library">
            <div className="button-redirection">
              <img src={biblighibli} alt="biblighibli accueil" />
              <h1>Ghibliothèque</h1>
            </div>
          </HashLink>
        </div>

        <FooterCredit />
      </section>
    </div>
  );
}

export default Accueil;
