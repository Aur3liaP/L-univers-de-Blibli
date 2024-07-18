import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import SvgMononoke from "../components/SvgMononoke";
import MusicButton from "../components/MusicButton";
import BackButton from "../components/BackButton";
import ambientMononoke from "../assets/ambient.ogg";
import spinAudio from "../assets/spin.ogg";
import "../styles/ParallaxMononoke.modules.css";

function ParallaxMononoke() {
  // Effet parallax
  const [autoPlay, setAutoPlay] = useState(true);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const isParallaxActive = useRef(false);
  const requestRef = useRef();

  const random = (min, max) => min + Math.random() * (max - min);

  const handleMouseMove = (event) => {
    if (isParallaxActive.current) {
      targetX.current = event.clientX;
      targetY.current = event.clientY;
    }
  };

  useGSAP(() => {
    const updatePosition = () => {
      if (isParallaxActive.current) {
        mouseX.current += (targetX.current - mouseX.current) * 0.02;
        mouseY.current += (targetY.current - mouseY.current) * 0.02;
        const layers = document.querySelectorAll(".layers");
        layers.forEach((layer, index) => {
          const speed = 0.002 + index * 0.05;
          const dx = (mouseX.current - targetX.current) * speed;
          const dy = (mouseY.current - targetY.current) * speed;
          layer.setAttribute("transform", `translate(${dx}, ${dy})`);
        });
      }
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  });

  useGSAP(() => {
    const TextsAppear = () => {
      const texts = document.querySelectorAll('[data-kodama="texts"]');
      texts.forEach((text) => {
        gsap.to(text, {
          opacity: 1,
          duration: 1.5,
          delay: 1,
          ease: "power3.inOut",
          onComplete: () => {
            isParallaxActive.current = true;
          },
        });
      });
    };

    const KodamasAppear = () => {
      const kodamas = document.querySelectorAll('[data-kodama="kodamas"]');
      kodamas.forEach((kodama, index) => {
        gsap.fromTo(
          kodama,
          { opacity: 0 },
          {
            opacity: 0.75,
            duration: 2,
            delay: index * 1,
            ease: "power3.inOut",
            onComplete: TextsAppear,
          }
        );
      });
    };

    const firefliesAnimation = () => {
      const fireflies = document.querySelectorAll('[data-kodama="fireflies"]');
      fireflies.forEach((fireflie, index) => {
        gsap.to(fireflie, {
          translateX: 2,
          translateY: 1,
          duration: 15,
          delay: index * 1,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          repeatDelay: 0.5,
        });
      });
    };

    const swingVine = () => {
      const vines = document.querySelectorAll('[data-kodama="vines"]');
      const duration = random(3, 5);
      const rotation = random(-5, 5);
      vines.forEach((vine) => {
        gsap.to(vine, {
          rotation,
          transformOrigin: "top center",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration,
        });
      });
    };

    const playShrooms = () => {
      const shrooms = document.querySelectorAll('[data-kodama="shrooms"]');
      shrooms.forEach((shroom) => {
        gsap.set(shroom, { autoAlpha: 1 });
        gsap.to(shroom, {
          y: "+=3",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: random(1, 2),
        });
      });
    };

    const parallaxAppear = () => {
      const kodamas = document.querySelectorAll('[data-kodama="kodamas"]');
      kodamas.forEach((kodama) => gsap.set(kodama, { opacity: 0 }));
      const texts = document.querySelectorAll('[data-kodama="texts"]');
      texts.forEach((kodama) => gsap.set(kodama, { opacity: 0 }));

      gsap.fromTo(
        ".horizontal-center",
        {
          opacity: 0,
          y: "-100vh",
        },
        {
          opacity: 1,
          y: "0",
          duration: 9,
          onComplete: () => {
            KodamasAppear();
            swingVine();
            playShrooms();
            firefliesAnimation();
          },
        }
      );
    };

    parallaxAppear();
  });

  useGSAP(() => {
    const heads = document.querySelectorAll('[data-kodama="heads"]');
    const tlHeads = gsap.timeline({ delay: 10, repeat: -1, repeatDelay: 3 });
    const spinSound = new Audio(spinAudio);

    heads.forEach((head, index) => {
      const delay = Math.random() * 4 + 1;

      tlHeads
        .add(`spin${index + 1}`, `+=${delay}`)
        .to(
          head,
          {
            rotation: 90,
            transformOrigin: "center center",
            duration: 2,
            onStart: () => spinSound.play(),
          },
          `spin${index + 1}`
        )
        .to(
          head,
          {
            rotation: 0,
            ease: "elastic.out(1.5, 0.1)",
            transformOrigin: "center center",
            duration: 2,
          },
          `spin${index + 1}+=2`
        );
    });
    gsap.to(".kodama1", {
      y: "50",
    });
  });

  return (
    <div>
      <SvgMononoke />
      <MusicButton
        audioSrc={ambientMononoke}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
      <BackButton svgSrc="immersion" />
      <div className="controls horizontal-center">
        {/* <div data-btn="replay" className="btn replay-btn" aria-hidden="true">
          <p className="btn-label">Replay</p>
        </div> */}
      </div>
    </div>
  );
}

export default ParallaxMononoke;
