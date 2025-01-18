"use client"

import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

import Image from 'next/image'

export default function navigation() {
  return (
    <div className="flex w-full">
        <div className="show-between-sizes w-full bg-black">
            <div className="flex justify-between items-center w-full p-3">
                <div className="flex items-center">
                  <Image 
                    src="/7slices.jpg"  // Bildpfad (kann lokal oder extern sein)
                    alt=""
                    width={75}  // Bildbreite
                    height={50} // Bildhöhe
                  />
                </div>
                <div className="flex justify-between px-12 p-3">
                  <FiInstagram className="text-xl mr-4 text-white" />
                  <FaTiktok className="text-xl text-white" />
                </div>
            </div>
        </div>
    </div>
  )
}