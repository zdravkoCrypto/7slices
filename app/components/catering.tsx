"use client"
import Image from 'next/image'

export default function Catering() {
  return (
    <div className="flex w-full">
      <div className="show-between-sizes flex flex-col w-full flex-grow">
          <div className="flex w-full items-center justify-center p-6">
              <div className="flex w-4/6 bg-black rounded-xl justify-between">
                <div className="p-4 mt-12">
                  <span className="font-semibold text-white">Catering 7 Slices</span>
                </div>
                <Image 
                  src="/catering.svg"  // Bildpfad (kann lokal oder extern sein)
                  alt=""
                  width={150}  // Bildbreite
                  height={150} // Bildhöhe
                  className="show-between-sizes "
              />
             </div>
          </div>
      </div>
    </div>
  )
}
