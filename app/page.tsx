import Navigation from "./components/navigation";
import Couponwheel from "./components/couponwheel";

import Introduction from "./components/introduction";

import Imagestop from "./components/imagestop";
import Speisekarte from "./components/speisekarte";

import Imagesbottom from "./components/imagesbottom";

import Kontakt from "./components/kontakt";
import Googlemaps from "./components/googlemaps";

import Catering from "./components/catering";
import Rechtlichesbottom from "./components/rechtlichesbottom";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Navigation />
        <Couponwheel />
        <Introduction />
        <Imagestop />
        <Speisekarte />
        <Imagesbottom />
        <Kontakt />
        <Googlemaps />
        <Catering />
        <Rechtlichesbottom />
    </div>
  );
}