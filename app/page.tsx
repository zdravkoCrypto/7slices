"use client"

import Navigation from "./components/navigation";

import Introduction from "./components/introduction";

import Imagestop from "./components/imagestop";
import Speisekarte from "./components/speisekarte";

import Kontakt from "./components/kontakt";

import Catering from "./components/catering";
import Rechtlichesbottom from "./components/rechtlichesbottom";

import MobileOnly from "./components/MobileOnly";

export default function Home() {
  return (
    <div className="flex flex-col">
        <MobileOnly />
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