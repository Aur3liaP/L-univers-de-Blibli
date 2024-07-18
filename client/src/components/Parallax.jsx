import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import "../styles/Parallax.css";

function Parallax() {
  const appear = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.4,
        duration: 3,
        scrollTrigger: {
          trigger: elem,
          start: "top 25%",
          // markers: true,
          id: "wind",
        },
      }
    );
  };

  useEffect(() => {
    appear(".parallax-inner");
  }, []);

  return (
    <div className="parallax">
      <div className="parallax-inner">
        <h2 className="wind">« Le vent se lève, il faut tenter de vivre »</h2>
      </div>
    </div>
  );
}

export default Parallax;
