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
          <span className="show-between-sizes ml-4 mt-4 text-xs font-semibold text-white">Impressum:</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">E&K Gastro GmbH</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">Mariahilferstraße 151</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">1150 Wien</span>

          <span className="show-between-sizes ml-4 mt-4 text-xs font-semibold text-[#c7c5bb]">Tel.: +43 664 241 11 44</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">Email: office@teslapizza.at</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">UID-Nr.: ATU7585847694</span>
          <span className="show-between-sizes ml-4 mt-2 text-xs font-semibold text-[#c7c5bb]">Firmenbuchnummer: FN 48435423h</span>
        </div>
    </div>
  )
}
