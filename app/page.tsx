"use client"

import Navigation from "./components/navigation";

import Introduction from "./components/introduction";

import Imagestop from "./components/imagestop";
import Speisekarte from "./components/speisekarte";

import Kontakt from "./components/kontakt";

import Catering from "./components/catering";
import Rechtlichesbottom from "./components/rechtlichesbottom";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Navigation />
        <Introduction />
        <Imagestop />
        <Speisekarte />
        <Kontakt />
        <Catering />
        <Rechtlichesbottom />
    </div>
  );
}