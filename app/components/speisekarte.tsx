"use client"

import Image from 'next/image'

export default function Speisekarte() {
  return (
    <div className="flex w-full">
        <div className="flex flex-col justify-center items-center show-between-sizes w-full flex-grow">
            <div></div>
            <div className="">
              <Image 
                src="/weeat.svg"  // Bildpfad (kann lokal oder extern sein)
                alt=""
                width={250}  // Bildbreite
                height={250} // Bildhöhe
                className="show-between-sizes mt-12"
              />
            </div>
            <div className="flex flex-col w-full p-6">
                <h1 className="show-between-sizes text-xl font-graffiti text-outline text-outline-stroke">SPEISEKARTE</h1>
                <span className="show-between-sizes italic font-semibold text-xs mt-4">
                    Unsere Pizzaióli bereiten die Pizza nach einem
                    traditionellen neapolitanischen Rezept zu.
                    Feinstes italienisches Mehl, Teig der seine Liebe
                    und Zeit benötigt, gepaart mit den besten
                    Zutaten aus der Region, sorgen für ein
                    himmlisches Geschmackserlebnis. Zu guter Letzt
                    wird die fertige Kreation in unserem Pizzaofen der
                    Manufaktur Stefano Ferrara gebacken, bis die
                    Pizza deinen Gaumen verzaubert
                </span>
                <div className="mt-4">
                  <button className="
                  italic font-semibold text-xs show-between-sizes
                  rounded-xl bg-black text-[#9b59b6] p-4
                ">SPEISEKARTE ANSEHEN</button>
                </div>
                <div className="flex w-full">
                  <Image 
                    src="/pizzaelements.png"  // Bildpfad (kann lokal oder extern sein)
                    alt=""
                    width={500}  // Bildbreite
                    height={250} // Bildhöhe
                    className="show-between-sizes mt-12"
                  />
                </div>
                
            </div>
        </div>
    </div>
  )
}
