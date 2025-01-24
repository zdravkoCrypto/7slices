"use client"
import Image from 'next/image'

export default function Rechtlichesbottom() {
  return (
    <div className="show-between-sizes flex w-full p-6 bg-black">
        <Image 
          src="/7slices.jpg"  // Bildpfad (kann lokal oder extern sein)
          alt=""
          width={150}  // Bildbreite
          height={50} // Bildhöhe
          className="show-between-sizes"
        />
        <div className="show-between-sizes flex flex-col w-full">
          <span className="show-between-sizes ml-4 mt-4 text-xs font-semibold text-white">Impressum Angaben gemäß § 5 TMG
          </span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">7slices </span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">Rauchschwalbenweg 916727 Oberkrämer</span>

          <span className="show-between-sizes ml-4 mt-4 text-xs font-semibold text-[#c7c5bb]">Telefon: 0176 41239568</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">E-Mail: info@sevenslices.de</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">Zuständiges Finanzamt: Finanzamt Oranienburg</span>
        </div>
    </div>
  )
}
