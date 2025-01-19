"use client";

import React, { useEffect, useState } from "react";

export default function MobileOnly() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Funktion, um die Größe zu überprüfen
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Prüfen, ob die Breite und Höhe kleiner oder gleich den mobilen Werten sind
            setIsMobile(width <= 430 && height <= 932);
        };

        // Beim ersten Render die Größe prüfen
        checkScreenSize();

        // Event-Listener für Fenstergröße
        window.addEventListener("resize", checkScreenSize);

        // Cleanup des Event-Listeners
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Wenn der Screen größer ist, wird die Nachricht angezeigt
    if (isMobile) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
            <div className="text-center text-white text-lg font-bold">
                Diese Webseite ist nur auf Handy erreichbar
            </div>
        </div>
    );
}
