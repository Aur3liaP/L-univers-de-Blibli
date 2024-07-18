import { Link } from "react-router-dom";
import "../styles/FooterCredit.css";

import poulet from "../assets/images/pngegg (7).png";

function FooterCredit() {
  return (
    <div className="PageCredit">
      <p>
        © 2024 STUDIO GHIBLI Inc. - Site créé par des fans, pour des fans à but
        non commercial -<Link to="/Credit">Crédits</Link>
        <img src={poulet} alt="poulet" />
      </p>
    </div>
  );
}

export default FooterCredit;
