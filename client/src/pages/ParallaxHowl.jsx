import { gsap } from "gsap";
import { useCallback, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import MusicButton from "../components/MusicButton";
import BackButton from "../components/BackButton";
import HowlAudio from "../assets/Howls Moving Castle - The Flower Garden.mp3";
import "../styles/ParallaxHowl.modules.css";

const WIDTH = window.innerWidth;
const scale = WIDTH / 1600;

function ParallaxHowl() {
  const [autoPlay, setAutoPlay] = useState(true);
  // const speed = useRef(0.15);
  const progress = useRef(0.0);
  const castle = useRef(null);
  const castleRef = useRef(null);
  const lastTime = useRef(0);

  const resize = useCallback(() => {
    gsap.set(castle.current, { scale: scale * 0.6 });
  }, []);

  const draw = useCallback(() => {
    requestAnimationFrame(draw);

    // Calculez le delta temps écoulé depuis la dernière image
    const currentTime = new Date().getTime();
    const deltaTime = currentTime - lastTime.current;
    lastTime.current = currentTime;

    // Incrémentez la progression en fonction du delta temps et de la durée totale souhaitée (15 secondes)
    progress.current += deltaTime / (30 * 1000);

    if (progress.current > 1) progress.current = 0;

    const castleWidth = castle.current.offsetWidth * scale;

    gsap.set(castleRef.current, {
      x: (1600 * scale + castleWidth) * -progress.current + castleWidth / 2,
      y: 800 * scale * -(0.39 + progress.current * 0.39),
    });
  }, []);

  useGSAP(() => {
    resize();
    window.addEventListener("resize", resize);
    lastTime.current = new Date().getTime();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(draw);
    };
  }, [resize, draw]);

  // Animations GSAP
  useGSAP(() => {
    // Clouds
    const removeClouds = () => {
      const clouds = document.querySelector(".clouds");
      if (clouds) {
        clouds.remove();
      }
    };
    const repeatCloudAnimation = (targets) => {
      gsap.set(targets[0], {
        y: Math.random() * 200 - 100,
        rotationZ: Math.round(Math.random() * 60) - 30,
        scaleX: Math.random() > 0.5 ? 1 : -1,
      });
    };

    const cloudIntro = () => {
      gsap.to(".cloud1", 60, {
        x: WIDTH * 2,
        y: 300 * scale,
        opacity: 0.3,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud-shadow1", 60, {
        x: WIDTH * 2 + 50 * scale,
        y: 450 * scale,
        opacity: 0.2,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud-shadow2", 60, {
        x: WIDTH * 2 + 50 * scale,
        y: 450 * scale,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud-shadow3", 60, {
        x: WIDTH * 2 + 50 * scale,
        y: 450 * scale,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud2", 60, {
        x: WIDTH * 2,
        y: 300 * scale,
        opacity: 0.5,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud3", 60, {
        x: WIDTH * 2,
        y: 300 * scale,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud4", 60, {
        x: WIDTH * 2,
        y: 300 * scale,
        ease: "none",
        force3D: true,
      });
      gsap.to(".cloud5", 60, {
        x: WIDTH * 2,
        y: 300 * scale,
        ease: "none",
        force3D: true,
        onComplete: removeClouds,
      });
    };

    const animateBgClouds = () => {
      gsap.to(".cloud-bg", 60, {
        x: WIDTH * 2.2,
        y: 200 * scale,
        ease: "none",
        repeat: -1,
        force3D: true,
        onRepeat: repeatCloudAnimation,
      });
      gsap.to(".cloud-bg2", 70, {
        x: WIDTH * 3.2,
        y: 200 * scale,
        ease: "none",
        delay: 12,
        repeat: -1,
        force3D: true,
        onRepeat: repeatCloudAnimation,
      });
    };

    cloudIntro();
    animateBgClouds();

    // const castle = castleRef.current;
    // gsap.to(castle, {
    //   duration: 40,
    //   repeatDelay: 1,
    //   x: "-250vh",
    //   y: "-95vh",
    //   ease: "none",
    //   repeat: -1,
    // });

    const tlCastle = gsap.timeline({ repeat: -1, delay: 0.0 });
    tlCastle.set(".castle", { rotationZ: 9 });
    tlCastle.to(".castle", 1.0, { rotationZ: 7, delay: 0.0, force3D: true });
    tlCastle.to(".castle", 1.0, { rotationZ: 9, delay: 1.0, force3D: true });
    tlCastle.to(".castle", 0.5, {
      x: `+=${2 * scale}`,
      y: `-=${4 * scale}`,
      delay: 0.0,
      force3D: true,
    });
    tlCastle.to(".castle", 0.5, {
      x: `-=${2 * scale}`,
      y: `+=${3 * scale}`,
      delay: 1,
      force3D: true,
    });

    // Legs
    const tlCastleLegBr = gsap.timeline({
      repeat: -1,
      delay: 0,
      ease: "power1.inOut",
    });
    tlCastleLegBr.set(".brleg", { rotationZ: 35, x: -30 });
    tlCastleLegBr
      .to(".brleg", {
        rotationZ: -35,
        x: 30,
        delay: 0.0,
        force3D: true,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".brfoot", { rotationZ: -35, ease: "power1.in" }, "<");
    tlCastleLegBr.to(".brleg", {
      y: -20,
      delay: 0.0,
      force3D: true,
      duration: 0.9,
      ease: "power1.inOut",
    });
    tlCastleLegBr
      .to(".brleg", {
        x: -30,
        rotationZ: 35,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
        ease: "power1.inOut",
      })
      .to(
        ".brfoot",
        { rotationZ: -5, force3D: true, ease: "power1.inOut" },
        "<"
      );
    tlCastleLegBr
      .to(".brleg", {
        y: 10,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
        ease: "power1.inOut",
      })
      .to(".brfoot", { rotationZ: 5, force3D: true, ease: "power1.out" }, "<");

    const tlCastleLegFr = gsap.timeline({
      repeat: -1,
      delay: 1.8,
      ease: "power1.inOut",
    });
    tlCastleLegFr.set(".frleg", { rotationZ: 35, x: -30 });
    tlCastleLegFr
      .to(".frleg", {
        rotationZ: -35,
        x: 30,
        delay: 0.0,
        force3D: true,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".frfoot", { rotationZ: -35, ease: "power1.in" }, "<");
    tlCastleLegFr.to(".frleg", {
      y: -10,
      delay: 0.0,
      force3D: true,
      duration: 0.9,
      ease: "power1.inOut",
    });
    tlCastleLegFr
      .to(".frleg", {
        x: -30,
        rotationZ: 35,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
        ease: "power1.inOut",
      })
      .to(
        ".frfoot",
        { rotationZ: -5, force3D: true, ease: "power1.inOut" },
        "<"
      );
    tlCastleLegFr
      .to(".frleg", {
        y: 3,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
        ease: "power1.inOut",
      })
      .to(".frfoot", { rotationZ: 5, force3D: true, ease: "power1.out" }, "<");

    const tlCastleLegFl = gsap.timeline({
      repeat: -1,
      delay: 0.9,
      ease: "power1.inOut",
    });

    tlCastleLegFl.set(".flleg", { rotationZ: 25, x: 15, y: 3 });
    tlCastleLegFl.set(".flfoot", { rotationZ: -50 });
    tlCastleLegFl
      .to(".flleg", {
        rotationZ: -35,
        x: 5,
        delay: 0.0,
        force3D: true,
        duration: 0.92,
      })
      .to(
        ".flfoot",
        { rotationZ: -25, ease: "power1.inOut", duration: 0.9 },
        "<"
      )
      .to(".flleg", { y: -10, delay: 0.0, force3D: true, duration: 0.9 })
      .to(".flleg", {
        x: -5,
        rotationZ: 25,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
      })
      .to(".flfoot", { rotationZ: -5, force3D: true, duration: 1 }, "<")
      .to(".flleg", { y: 3, delay: 0.0, force3D: true, duration: 0.9 })
      .to(".flfoot", { rotationZ: -40, force3D: true, duration: 0.2 }, "<")
      .to(".flfoot", { rotationZ: -50, force3D: true, duration: 0.9 }, "<");

    const tlCastleLegBl = gsap.timeline({
      repeat: -1,
      delay: 2.55,
      ease: "power1.inOut",
    });

    tlCastleLegBl.set(".blleg", { rotationZ: 25, x: -5, y: 3 });
    tlCastleLegBl.set(".blfoot", { rotationZ: -50 });
    tlCastleLegBl
      .to(".blleg", {
        rotationZ: -35,
        x: 5,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
      })
      .to(
        ".blfoot",
        { rotationZ: -25, ease: "power1.inOut", duration: 0.9 },
        "<"
      )
      .to(".blleg", { y: -10, delay: 0.0, force3D: true, duration: 0.9 })
      .to(".blleg", {
        x: -5,
        rotationZ: 25,
        delay: 0.0,
        force3D: true,
        duration: 0.9,
      })
      .to(".blfoot", { rotationZ: -5, force3D: true, duration: 1 }, "<")
      .to(".blleg", { y: 3, delay: 0.0, force3D: true, duration: 0.9 })
      .to(".blfoot", { rotationZ: -40, force3D: true, duration: 0.2 }, "<")
      .to(".blfoot", { rotationZ: -50, force3D: true, duration: 0.9 }, "<");

    // Wing
    const tlWing = gsap.timeline({ repeat: -1, delay: 0.8 });
    tlWing.set(".wing", { rotationZ: 2 });
    tlWing.to(".wing", 1.0, {
      rotationZ: -1,
      x: -5,
      delay: 0.0,
      force3D: true,
    });
    tlWing.to(".wing", 1.0, { rotationZ: 2, x: 0, delay: 1.0, force3D: true });

    // Chimney
    const tlChimney1 = gsap.timeline({
      repeat: -1,
      delay: 0.5,
      repeatDelay: 1,
    });
    tlChimney1.set(".chimney1", { rotationZ: -10 });
    tlChimney1
      .to(".chimney1", 1.5, { rotationZ: 5, delay: 0.0, force3D: true })
      .to(".chimney1", 1.5, { rotationZ: -10, delay: 1.5, force3D: true })
      .to(".chimney1", 0.5, { y: 5, x: 0, delay: 0.1, force3D: true })
      .to(".chimney1", 0.1, {
        y: -15,
        x: 4,
        delay: 0.6,
        ease: "power2.inOut",
        force3D: true,
      })
      .to(".chimney1", 0.9, { y: 0, x: 0, delay: 0.7, force3D: true })
      .to(".chimney1", 0.5, { y: 5, x: 0, delay: 1.6, force3D: true })
      .to(".chimney1", 0.1, {
        y: -15,
        x: 4,
        delay: 2.1,
        ease: "power2.inOut",
        force3D: true,
      })
      .to(".chimney1", 0.5, { y: 0, x: 0, delay: 2.2, force3D: true });

    const tlChimney2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tlChimney2.set(".chimney2", { rotationZ: -10 });
    tlChimney2
      .to(".chimney2", 1.5, { rotationZ: 5, delay: 0.0, force3D: true })
      .to(".chimney2", 1.5, { rotationZ: -10, delay: 1.5, force3D: true })
      .to(".chimney2", 0.5, { y: 5, x: 0, delay: 0.1, force3D: true })
      .to(".chimney2", 0.1, {
        y: -15,
        x: 4,
        delay: 0.6,
        ease: "power2.inOut",
        force3D: true,
      })
      .to(".chimney2", 0.9, { y: 0, x: 0, delay: 0.7, force3D: true })
      .to(".chimney2", 0.5, { y: 5, x: 0, delay: 1.6, force3D: true })
      .to(".chimney2", 0.1, {
        y: -15,
        x: 4,
        delay: 2.1,
        ease: "power2.inOut",
        force3D: true,
      })
      .to(".chimney2", 0.5, { y: 0, x: 0, delay: 2.2, force3D: true });

    const tlChimney3 = gsap.timeline({ repeat: -1, delay: 1.1 });
    tlChimney3.set(".chimney3", { rotationZ: -10 });
    tlChimney3
      .to(".chimney3", 1.5, { rotationZ: 5, delay: 0.0, force3D: true })
      .to(".chimney3", 1.5, { rotationZ: -10, delay: 1.5, force3D: true })
      .to(".chimney3", 0.5, { y: 5, x: 0, delay: 0.1, force3D: true })
      .to(".chimney3", 0.1, {
        y: -15,
        x: 4,
        delay: 0.6,
        ease: "power2.inOut",
        force3D: true,
      })
      .to(".chimney3", 0.9, { y: 0, x: 0, delay: 0.7, force3D: true })
      .to(".chimney3", 0.5, { y: 5, x: 0, delay: 1.6, force3D: true })
      .to(".chimney3", 0.1, {
        y: -15,
        x: 4,
        delay: 2.1,
        ease: "power2.inOut",
        force3D: true,
      })
      .to(".chimney3", 0.5, { y: 0, x: 0, delay: 2.2, force3D: true });

    const tlMound = gsap.timeline({ repeat: -1, delay: 0.2 });
    tlMound.set(".mound-group", { rotationZ: 2 });
    tlMound
      .to(".mound-group", 1.0, { rotationZ: -1, delay: 0.0, force3D: true })
      .to(".mound-group", 1.0, { rotationZ: 2, delay: 1.0, force3D: true });

    const tlHouses = gsap.timeline({ repeat: -1, delay: 0.5 });
    tlHouses.set(".houses-group", { rotationZ: 2, x: -4 });
    tlHouses.set(".point1", { rotationZ: 2, x: -2 });
    tlHouses
      .to(".houses-group", 1.0, {
        rotationZ: -1,
        y: 5,
        x: 0,
        delay: 0.0,
        force3D: true,
      })
      .to(".houses-group", 1.0, {
        rotationZ: 2,
        y: 0,
        x: -4,
        delay: 1.0,
        force3D: true,
      })
      .to(".point1", 1.0, {
        rotationZ: -10,
        y: 2,
        x: 0,
        delay: 0.0,
        force3D: true,
      })
      .to(".point1", 1.0, {
        rotationZ: 2,
        y: 0,
        x: -2,
        delay: 1.0,
        force3D: true,
      })
      .to(".point2", 1.0, {
        rotationZ: -5,
        y: 5,
        x: 2,
        delay: 0.0,
        force3D: true,
      })
      .to(".point2", 1.0, {
        rotationZ: 0,
        y: 0,
        x: 0,
        delay: 1.0,
        force3D: true,
      });

    const tlTreeHouse = gsap.timeline({ repeat: -1, delay: 1.4 });
    tlTreeHouse.set(".treehouse", { rotationZ: -5, y: 20, x: 4 });
    tlTreeHouse
      .to(".treehouse", 1.0, { rotationZ: 10, delay: 0.0, force3D: true })
      .to(".treehouse", 1.0, { rotationZ: -5, delay: 1.0, force3D: true })
      .to(".treehouse", 1.0, { rotationZ: 10, delay: 2.0, force3D: true })
      .to(".treehouse", 1.0, { rotationZ: -5, delay: 3.0, force3D: true })
      .to(".treehouse", 0.4, { y: -5, x: -2, delay: 0.2, force3D: true })
      .to(".treehouse", 3.2, { y: 20, x: 4, delay: 0.8, force3D: true });

    const tlCastlePieces1 = gsap.timeline({ repeat: -1, delay: 0.65 });
    tlCastlePieces1.set(".antenna", { rotationZ: 10, x: 0 });
    tlCastlePieces1
      .to(".antenna", 1.0, { rotationZ: -5, x: 0, delay: 0.0, force3D: true })
      .to(".antenna", 1.0, { rotationZ: 10, x: 5, delay: 1.0, force3D: true })
      .to(".antenna", 1.0, { rotationZ: -10, x: -5, delay: 2.0, force3D: true })
      .to(".antenna", 1.0, { rotationZ: 10, x: 0, delay: 3.0, force3D: true });

    const tlCastlePieces2 = gsap.timeline({ repeat: -1, delay: 0.65 });
    tlCastlePieces2.set(".wind", { rotationZ: -10, x: 0 });
    tlCastlePieces2
      .to(".wind", 1.1, { rotationZ: 5, delay: 0.0, force3D: true })
      .to(".wind", 1.0, { rotationZ: -15, delay: 1.1, force3D: true })
      .to(".wind", 1.0, { rotationZ: 10, delay: 2.1, force3D: true })
      .to(".wind", 0.9, { rotationZ: -10, delay: 3.1, force3D: true });

    const tlCastlePieces3 = gsap.timeline({
      repeat: -1,
      delay: 0.65,
      duration: 0.5,
    });
    tlCastlePieces3.set(".knob", { rotationZ: -20, x: 0 });
    tlCastlePieces3
      .to(".knob", 0.2, { rotationZ: 50, delay: 0.0, force3D: true })
      .to(".knob", 0.2, { rotationZ: -20, delay: 0.3, force3D: true })
      .to(".knob", 0.2, { rotationZ: 45, delay: 0.7, force3D: true })
      .to(".knob", 0.2, { rotationZ: -25, delay: 1.0, force3D: true })
      .to(".knob", 0.2, { rotationZ: 30, delay: 1.5, force3D: true })
      .to(".knob", 0.2, { rotationZ: 0, delay: 1.9, force3D: true })
      .to(".knob", 0.2, { rotationZ: -20, delay: 2.2, force3D: true })
      .to(".knob", 0.3, { rotationZ: 60, delay: 2.6, force3D: true })
      .to(".knob", 0.2, { rotationZ: -10, delay: 3.0, force3D: true })
      .to(".knob", 0.2, { rotationZ: 40, delay: 3.4, force3D: true })
      .to(".knob", 0.2, { rotationZ: -20, delay: 3.7, force3D: true });

    const tlCastlePieces4 = gsap.timeline({ repeat: -1, delay: 0.65 });
    tlCastlePieces4
      .to(".tele", 1.0, { rotationZ: -3, delay: 0.0, force3D: true })
      .to(".tele", 1.0, { rotationZ: 2, delay: 1.0, force3D: true })
      .to(".tele", 1.0, { rotationZ: -3, delay: 2.0, force3D: true })
      .to(".tele", 1.0, { rotationZ: 0, delay: 3.0, force3D: true })
      .to(".tele", 0.25, { x: 25, y: 4, delay: 0.6, force3D: true })
      .to(".tele", 2.5, { x: 0, y: 0, delay: 0.9, force3D: true });

    const tlCastlePieces5 = gsap.timeline({ repeat: -1, delay: 0.65 });
    tlCastlePieces5
      .to(".cannon", 0.9, { rotationZ: -7, delay: 0.0, force3D: true })
      .to(".cannon", 0.9, { rotationZ: 2, delay: 0.9, force3D: true })
      .to(".cannon", 1.1, { rotationZ: -5, delay: 1.8, force3D: true })
      .to(".cannon", 1.1, { rotationZ: 0, delay: 2.9, force3D: true })
      .to(".cannon", 0.25, { x: 30, y: 4, delay: 0.85, force3D: true })
      .to(".cannon", 2.6, { x: 0, y: 0, delay: 1.4, force3D: true });
  });

  return (
    <div>
      <MusicButton
        audioSrc={HowlAudio}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
      />
      <BackButton svgSrc="immersion" />
      <div className="howlPage">
        {/* onMouseMove={handleMouseMove} */}

        <div className="containerHowl">
          <img
            alt="parallaxHowls"
            className="background"
            src="http://cinemont.com/tutorials/howls/background.jpg"
          />
          <img
            alt="parallaxHowls"
            className="cloud-bg"
            src="http://cinemont.com/tutorials/howls/cloud-bg.png"
          />
          <img
            alt="parallaxHowls"
            className="cloud-bg2"
            src="http://cinemont.com/tutorials/howls/cloud-bg.png"
          />
          <div alt="parallaxHowls" className="castle-container" ref={castleRef}>
            <div alt="parallaxHowls" className="castle" ref={castle}>
              <div alt="parallaxHowls" className="brleg">
                <img
                  alt="parallaxHowls"
                  className="brfoot"
                  src="http://cinemont.com/tutorials/howls/brfoot.png"
                />
                <img
                  alt="parallaxHowls"
                  className="brbottom"
                  src="http://cinemont.com/tutorials/howls/brbottom.png"
                />
              </div>
              <div alt="parallaxHowls" className="frleg">
                <img
                  alt="parallaxHowls"
                  className="frfoot"
                  src="http://cinemont.com/tutorials/howls/frfoot.png"
                />
                <img
                  alt="parallaxHowls"
                  className="frbottom"
                  src="http://cinemont.com/tutorials/howls/frbottom.png"
                />
              </div>
              <img
                alt="parallaxHowls"
                className="chimney3"
                src="http://cinemont.com/tutorials/howls/chimney3.png"
              />
              <img
                alt="parallaxHowls"
                className="treehouse"
                src="http://cinemont.com/tutorials/howls/treehouse.png"
              />
              <div alt="parallaxHowls" className="houses-group">
                <img
                  alt="parallaxHowls"
                  className="point6"
                  src="http://cinemont.com/tutorials/howls/point6.png"
                />
                <img
                  alt="parallaxHowls"
                  className="point5"
                  src="http://cinemont.com/tutorials/howls/point5.png"
                />
                <img
                  alt="parallaxHowls"
                  className="point4"
                  src="http://cinemont.com/tutorials/howls/point4.png"
                />
                <img
                  alt="parallaxHowls"
                  className="houses"
                  src="http://cinemont.com/tutorials/howls/houses.png"
                />
              </div>
              <img
                alt="parallaxHowls"
                className="chimney2"
                src="http://cinemont.com/tutorials/howls/chimney2.png"
              />
              <img
                alt="parallaxHowls"
                className="chimney1"
                src="http://cinemont.com/tutorials/howls/chimney1.png"
              />
              <img
                alt="parallaxHowls"
                className="wing"
                src="http://cinemont.com/tutorials/howls/wing.png"
              />
              <div alt="parallaxHowls" className="mound-group">
                <img
                  alt="parallaxHowls"
                  className="antenna"
                  src="http://cinemont.com/tutorials/howls/antenna.png"
                />
                <img
                  alt="parallaxHowls"
                  className="point3"
                  src="http://cinemont.com/tutorials/howls/point3.png"
                />
                <img
                  alt="parallaxHowls"
                  className="point2"
                  src="http://cinemont.com/tutorials/howls/point2.png"
                />
                <img
                  alt="parallaxHowls"
                  className="point1"
                  src="http://cinemont.com/tutorials/howls/point1.png"
                />
                <img
                  alt="parallaxHowls"
                  className="mound"
                  src="http://cinemont.com/tutorials/howls/mound.png"
                />
              </div>
              <img
                alt="parallaxHowls"
                className="wind"
                src="http://cinemont.com/tutorials/howls/wind.png"
              />
              <img
                alt="parallaxHowls"
                className="cannon"
                src="http://cinemont.com/tutorials/howls/cannon.png"
              />
              <img
                alt="parallaxHowls"
                className="main"
                src="http://cinemont.com/tutorials/howls/main.png"
              />
              <div alt="parallaxHowls" className="blleg">
                <div alt="parallaxHowls" className="blbottom-group">
                  <img
                    alt="parallaxHowls"
                    className="blfoot"
                    src="http://cinemont.com/tutorials/howls/flfoot.png"
                  />
                  <img
                    alt="parallaxHowls"
                    className="blbottom"
                    src="http://cinemont.com/tutorials/howls/flbottom.png"
                  />
                </div>
                <img
                  alt="parallaxHowls"
                  className="bltop"
                  src="http://cinemont.com/tutorials/howls/fltop.png"
                />
              </div>
              <img
                alt="parallaxHowls"
                className="blcover"
                src="http://cinemont.com/tutorials/howls/blcover.png"
              />
              <img
                alt="parallaxHowls"
                className="knob"
                src="http://cinemont.com/tutorials/howls/knob.png"
              />
              <img
                alt="parallaxHowls"
                className="tele"
                src="http://cinemont.com/tutorials/howls/tele.png"
              />
              <img
                alt="parallaxHowls"
                className="telecover"
                src="http://cinemont.com/tutorials/howls/telecover.png"
              />
              <div alt="parallaxHowls" className="flleg">
                <div alt="parallaxHowls" className="flbottom-group">
                  <img
                    alt="parallaxHowls"
                    className="flfoot"
                    src="http://cinemont.com/tutorials/howls/flfoot.png"
                  />
                  <img
                    alt="parallaxHowls"
                    className="flbottom"
                    src="http://cinemont.com/tutorials/howls/flbottom.png"
                  />
                </div>
                <img
                  alt="parallaxHowls"
                  className="fltop"
                  src="http://cinemont.com/tutorials/howls/fltop.png"
                />
              </div>
              <img
                alt="parallaxHowls"
                className="flcover"
                src="http://cinemont.com/tutorials/howls/flcover.png"
              />
            </div>
          </div>
          <img
            alt="parallaxHowls"
            className="foreground"
            src="http://cinemont.com/tutorials/howls/foreground.png"
          />
          <div alt="parallaxHowls" className="clouds">
            <img
              alt="parallaxHowls"
              className="cloud-shadow1"
              src="http://cinemont.com/tutorials/howls/cloud_shadow-1.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud-shadow2"
              src="http://cinemont.com/tutorials/howls/cloud_shadow-1.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud-shadow3"
              src="http://cinemont.com/tutorials/howls/cloud_shadow-1.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud1"
              src="http://cinemont.com/tutorials/howls/cloud-1.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud2"
              src="http://cinemont.com/tutorials/howls/cloud-1.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud3"
              src="http://cinemont.com/tutorials/howls/cloud-2.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud4"
              src="http://cinemont.com/tutorials/howls/cloud-1.png"
            />
            <img
              alt="parallaxHowls"
              className="cloud5"
              src="http://cinemont.com/tutorials/howls/cloud-2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxHowl;
