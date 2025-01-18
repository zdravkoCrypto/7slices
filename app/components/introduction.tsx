"use client"

import Image from 'next/image'

function introduction() {
  return (
    <div className="flex w-full">
        <div className="flex flex-col show-between-sizes w-full flex-grow">
            <div className="flex items-center justify-center flex-col p-2 w-full">
                <h1 className="text-xl font-graffiti text-outline text-outline-stroke">PIZZA PER</h1>
                <h1 className="text-xl font-graffiti text-outline text-outline-stroke">PASSIONE</h1>

                <span className="italic font-semibold text-xs mt-4 ml-2">
                  .. bedeutet Leidenschafft für Pizza. Genau unter diesem
                  Motto kreieren wir all unsere Pizzen. Wir verwenden dabei
                  nicht nur die besten Zutaten, wir versuchen auch den alten
                  klassikern einen frischen Twist zu geben. Bei 7 Slices
                  können wir sie an jedem Standort mit Qualität bedienen, ohne
                  auf Qualität zu verzichten.
                </span>

                <span className="mt-2 text-[#9b59b6] italic text-xs font-bold">~ Geschäftsführer Filip</span>
            </div>

            <div className="flex w-full flex-grow p-6">
                <Image 
                  src="/tesla.svg"  // Bildpfad (kann lokal oder extern sein)
                  alt=""
                  width={250}  // Bildbreite
                  height={250} // Bildhöhe
                  className="ml-8"
                />
            </div>
        </div>
    </div>
  )
}
export default introduction