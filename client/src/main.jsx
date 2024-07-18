import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import "./styles/Transition.css";
import App from "./App";
import Ghibliotheque from "./pages/Ghibliotheque";
import TestButton from "./pages/TestButton";
import Immersion from "./pages/Immersion";
import Credit from "./pages/Credit";
import VoyageTotoro from "./pages/VoyageTotoro";
import ParallaxHowl from "./pages/ParallaxHowl";
import Accueil from "./pages/Accueil";
import ParallaxMononoke from "./pages/ParallaxMononoke";
import OuEstCharlie from "./pages/OuEstCharlie";
import QuiEstCe from "./pages/QuiEstCe";
import Puzzle from "./pages/Puzzle";
import BlindTest from "./pages/BlindTest";

const routes = [
  { path: "/", element: <App /> },
  { path: "/ghibliotheque", element: <Ghibliotheque /> },
  { path: "/Test", element: <TestButton /> },
  { path: "/Immersion", element: <Immersion /> },
  { path: "/credit", element: <Credit /> },
  { path: "/VoyageTotoro", element: <VoyageTotoro /> },
  { path: "/ParallaxHowl", element: <ParallaxHowl /> },
  { path: "/Accueil", element: <Accueil /> },
  { path: "/parallaxmononoke", element: <ParallaxMononoke /> },
  { path: "/ouestcharlie", element: <OuEstCharlie /> },
  { path: "/quiEstCe", element: <QuiEstCe /> },
  { path: "/puzzle", element: <Puzzle /> },
  { path: "/quiestce", element: <QuiEstCe /> },
  { path: "/blindtest", element: <BlindTest /> },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter basename="">
      <PageTransition routes={routes} />
    </HashRouter>
  </React.StrictMode>
);
