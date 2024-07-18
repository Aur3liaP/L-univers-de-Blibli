import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/WavesSvg.css";

function WavesSvg() {
  useGSAP(() => {
    const animateWaves = () => {
      gsap.to(".pathwaves1", {
        x: 18,
        y: -25,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        force3D: true,
        ease: "sine.inOut",
      });
      gsap.to(".pathwaves2", {
        x: 50,
        y: 8,
        duration: 2.5,
        delay: 0.5,
        yoyo: true,
        repeat: -1,
        force3D: true,
        ease: "sine.inOut",
      });
      gsap.to(".pathwaves3", {
        x: 45,
        y: 10,
        duration: 2.5,
        delay: 1,
        yoyo: true,
        repeat: -1,
        force3D: true,
        ease: "sine.inOut",
      });
      gsap.to(".pathwaves4", {
        x: 30,
        y: 15,
        duration: 2.5,
        delay: 1,
        yoyo: true,
        repeat: -1,
        force3D: true,
        ease: "sine.inOut",
      });
      gsap.to(".pathwaves5", {
        x: -45,
        y: -10,
        duration: 2.5,
        delay: 0.5,
        yoyo: true,
        repeat: -1,
        force3D: true,
        ease: "sine.inOut",
      });
      gsap.to(".pathwaves6", {
        x: 20,
        y: 28,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        force3D: true,
        ease: "sine.inOut",
      });
    };
    animateWaves();
  });

  return (
    <div>
      <div className="waves-bg">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 715"
          preserveAspectRatio="xMidYMid"
          width="140%"
          height="120%"
          style={{
            background: "#fff",
          }}
          display="block"
          //   {...props}
        >
          <g data-idx={1}>
            <linearGradient y2={0} y1={0} x2={1} x1={0} id="a" data-idx={2}>
              <stop offset={0} stopColor="#00aeef" data-idx={3} />
              <stop offset={1} stopColor="#00395d" data-idx={4} />
            </linearGradient>
            <path
              className="pathwaves1"
              opacity={0.21000000000000002}
              fill="url(#a)"
              d="M0 0v551.318q192-16.677 384-50.861t384-36.144 384-30.29 384-74.032 384 25.605V0z"
              data-idx={5}
            />
            <path
              className="pathwaves2"
              opacity={0.21000000000000002}
              fill="url(#a)"
              d="M0 0v513.33q192-20.932 384-41.968t384 48.065 384-51.744 384-57.185 384-9.24V0z"
              data-idx={7}
            />
            <path
              className="pathwaves3"
              opacity={0.21000000000000002}
              fill="url(#a)"
              d="M0 0v612.255q192-65.395 384-109.79t384-5.48 384-13.334 384-109.611 384-14.866V0z"
              data-idx={9}
            />
            <path
              className="pathwaves4"
              opacity={0.21000000000000002}
              fill="url(#a)"
              d="M0 0v539.281q192-12.77 384-38.415t384-81.693 384 18.61 384-36.057 384-97.457V0z"
              data-idx={11}
            />
            <path
              className="pathwaves5"
              opacity={0.21000000000000002}
              fill="url(#a)"
              d="M0 0v569.58q192-2.875 384-32.82t384-71.441 384-71.78 384-27.728 384-8.414V0z"
              data-idx={13}
            />
            <path
              className="pathwaves6"
              opacity={0.21000000000000002}
              fill="url(#a)"
              d="M0 0v566.97q192-32.485 384-69.777t384-41.314 384-28.977 384-26.511 384-40.241V0z"
              data-idx={15}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default WavesSvg;
