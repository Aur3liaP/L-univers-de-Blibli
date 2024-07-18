// eslint-disable-next-line import/no-unresolved
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import MusicButton from "../components/MusicButton";
import totoroAudio from "../assets/My Neighbor Totoro - The Path Of Wind.mp3";
import BackButton from "../components/BackButton";
import Kodama from "../components/KodamaLoading";
import "../styles/Immersion.css";

function Immersion() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (isSplineLoaded) {
      const minimumLoadingTime = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(minimumLoadingTime);
    }
    return undefined;
  }, [isSplineLoaded]);

  return (
    <div className="fullscreen" style={{ height: "100vh" }}>
      {isLoading && <Kodama />}
      <div
        style={{
          height: "100vh",
          visibility: isLoading ? "hidden" : "visible",
          cursor: "pointer",
        }}
      >
        <Spline
          scene="https://prod.spline.design/OAql8WMg6IABciNV/scene.splinecode"
          onLoad={() => setIsSplineLoaded(true)}
          className="spline-container"
        />
        <MusicButton
          audioSrc={totoroAudio}
          autoPlay={autoPlay}
          setAutoPlay={setAutoPlay}
        />
        <BackButton svgSrc="accueil" />
      </div>
    </div>
  );
}

export default Immersion;
