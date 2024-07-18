/* eslint-disable import/no-unresolved */
import Spline from "@splinetool/react-spline";
import "../styles/VoyageTotoro.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import porte from "../assets/images/porte-removebg-preview.png";

function VoyageTotoro() {
  return (
    // NavBar
    <div className="container-totoro">
      <div className="navBar">
        <NavBar />
      </div>
      {/* section= 3D, texte, svg */}
      <section>
        <div className="totoro3D">
          <Spline
            className="totoro"
            scene="https://prod.spline.design/f5FPzWpgFeo31c5l/scene.splinecode"
          />
        </div>
        <div className="texte">
          <p>
            Bienvenue dans mon aventure immersive. <br /> Redécouvrez les films
            du studio Ghibli.
          </p>
          <div className="test">
            <Link to="/Immersion">
              <img className="porte" src={porte} alt="tunnel" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VoyageTotoro;
