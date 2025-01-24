"use client"
import Image from 'next/image'

function Introduction() {
  return (
    <div className="flex w-full">
        <div className="flex flex-col show-between-sizes w-full flex-grow">
            <div className="flex items-center justify-center flex-col p-2 w-full">
                <h1 className="show-between-sizes text-xl font-graffiti text-outline text-outline-stroke">PIZZA PER</h1>
                <h1 className="show-between-sizes text-xl font-graffiti text-outline text-outline-stroke">PASSIONE</h1>

                <span className="show-between-sizes italic font-semibold text-xs mt-4 ml-2">
                  Herzlich willkommen bei 7Slices! 
                  Wir sind ein familiengeführter Pizza-Trailer,
                  der mit Liebe zum Detail und handgemachtem Teig
                  echte Gaumenfreuden bietet. Frische Zutaten und
                  sorgfältige Zubereitung stehen bei uns an erster 
                  Stelle. Ob an unserem Verkaufsstand, bei einer 
                  Feier oder einfach unterwegs - wir freuen uns, 
                  Ihnen ein einzigartiges Geschmackserlebnis zu bieten.
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
        </div>
    </div>
  )
}
export default Introduction