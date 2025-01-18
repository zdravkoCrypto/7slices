"use client"

import Image from 'next/image'

import { useState, useEffect } from 'react';

function Introduction() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Funktion zum Aktualisieren der Fenstergröße
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initiale Fenstergröße festlegen
    updateWindowSize();

    // Event Listener hinzufügen, um die Größe bei Fensteränderung zu aktualisieren
    window.addEventListener('resize', updateWindowSize);

    // Aufräumen des Event Listeners
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div className="flex w-full">
        <div className="flex flex-col show-between-sizes w-full flex-grow">
            <div className="flex items-center justify-center flex-col p-2 w-full">
                <h1 className="show-between-sizes text-xl font-graffiti text-outline text-outline-stroke">PIZZA PER</h1>
                <h1 className="show-between-sizes text-xl font-graffiti text-outline text-outline-stroke">PASSIONE</h1>

                <span className="show-between-sizes italic font-semibold text-xs mt-4 ml-2">
                  .. bedeutet Leidenschafft für Pizza. Genau unter diesem
                  Motto kreieren wir all unsere Pizzen. Wir verwenden dabei
                  nicht nur die besten Zutaten, wir versuchen auch den alten
                  klassikern einen frischen Twist zu geben. Bei 7 Slices
                  können wir sie an jedem Standort mit Qualität bedienen, ohne
                  auf Qualität zu verzichten.
                </span>

                <span className="show-between-sizes mt-2 text-[#9b59b6] italic text-xs font-bold">~ Phillipp 7 Slices</span>
            </div>

            <div className="flex show-between-sizes justify-center items-center w-full flex-grow p-6">
                <Image 
                  src="/tesla.svg"  // Bildpfad (kann lokal oder extern sein)
                  alt=""
                  width={250}  // Bildbreite
                  height={250} // Bildhöhe
                  className="show-between-sizes"
                />
            </div>
            <p className="text-lg">Breite: {windowSize.width} px</p>
            <p className="text-lg">Höhe: {windowSize.height} px</p>
        </div>
    </div>
  )
}
export default Introduction