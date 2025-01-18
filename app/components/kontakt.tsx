import { FaLocationDot } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";

export default function Kontakt() {
  return (
    <div className="flex w-full">
        <div className="flex flex-col show-between-sizes w-full flex-grow bg-black">
            <div></div>
            <div className="flex flex-col justify-center items-center mt-24">
                <h1 className="text-2xl font-semibold text-white">KONTAKT</h1>
                <FaLocationDot className="text-2xl mt-6 text-white" />
                <h1 className="font-semibold text-white mt-2">ADRESSE</h1>
                <span className="font-semibold text-white mt-2">Mariahilfer Straße 151 1150 Wien</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <CiClock1 className="text-2xl mt-6 text-white" />
              <h1 className="text-2xl font-semibold mt-6 text-white">ÖFFNUNSGSZEITEN</h1>
              <span className="
              font-semibold text-white mt-2
              ">Mo - So 12:00 - 20:00 Uhr</span>
              <span className="
              font-semibold text-white mt-2
              ">Feiertage: 12:00 - 23:00 Uhr</span>
              <div className="mt-24"></div>
            </div>
        </div>
    </div>
  )
}
