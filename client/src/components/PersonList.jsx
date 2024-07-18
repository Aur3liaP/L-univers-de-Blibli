import "../styles/PersonList.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const peoples = [
  { id: 1, name: "Aurelia Pic" },
  { id: 2, name: "Alexandre Farinho" },
  { id: 3, name: "Thomas Dziurdzi" },
  { id: 4, name: "Landry Dupont" },
  { id: 5, name: "Joris Camus" },
  { id: 6, name: "Mathieu Buniazet" },
];

function PersonList() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(container.current.firstChild, {
        opacity: 0,
        x: 300,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.from(container.current.querySelector("li:nth-child(2)"), {
        opacity: 0,
        x: -300,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.from(container.current.querySelector("li:nth-child(3)"), {
        opacity: 0,
        x: 300,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.from(container.current.querySelector("li:nth-child(4)"), {
        opacity: 0,
        x: -300,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.from(container.current.querySelector("li:nth-child(5)"), {
        opacity: 0,
        x: 300,
        duration: 1,
        ease: "power2.inOut",
      });
      tl.from(container.current.querySelector("li:nth-child(6)"), {
        opacity: 0,
        x: -300,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: container }
  );

  return (
    <div className="equipes">
      <ul ref={container}>
        {peoples.map((person) => (
          <li className="texte-animate" key={person.id}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
