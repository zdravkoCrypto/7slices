"use client"

import Image from 'next/image'

export default function Imagestop() {
  return (
    <div className="flex w-full">
        <div className="flex flex-col justify-center items-center show-between-sizes w-full flex-grow">
            <Image 
                src="/topImageOne.jpg"  // Bildpfad (kann lokal oder extern sein)
                alt=""
                width={500}  // Bildbreite
                height={250} // Bildhöhe
                className="show-between-sizes"
            />
            <Image 
                src="/topImageTwo.jpg"  // Bildpfad (kann lokal oder extern sein)
                alt=""
                width={500}  // Bildbreite
                height={250} // Bildhöhe
                className="show-between-sizes"
            />
            <Image 
                src="/topImageThree.jpg"  // Bildpfad (kann lokal oder extern sein)
                alt=""
                width={500}  // Bildbreite
                height={250} // Bildhöhe
                className="show-between-sizes"
            />
        </div>
    </div>
  )
}