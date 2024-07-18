import PersonList from "../components/PersonList";
import BackButton from "../components/BackButton";
import "../styles/Credit.css";

function Credit() {
  return (
    <div className="box1">
      <h1 className="titre">Merci pour votre visite</h1>
      <PersonList />
      <div className="accueilCredit">
        <BackButton svgSrc="accueil" />
      </div>
    </div>
  );
}

export default Credit;
