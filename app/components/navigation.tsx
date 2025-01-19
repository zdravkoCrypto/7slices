"use client"

import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

import Image from 'next/image'

export default function navigation() {
  const openInstagram = () => {
    const instagramURL = "https://www.instagram.com/7slices_?igsh=Zmt1MGloZ3kwazRu"; // Dein Instagram-Link
    window.open(instagramURL, "_blank", "noopener,noreferrer");
  };

  const opentiktok = () => {
    const instagramURL = "https://www.tiktok.com/@7slices_?_t=ZN-8tCfIQpL3Ru&_r=1"; // Dein Instagram-Link
    window.open(instagramURL, "_blank", "noopener,noreferrer");
  };

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
                    className="ml-8"
                  />
                </div>
                <div className="flex justify-between px-12 p-3">
                  <FiInstagram onClick={openInstagram} className="text-2xl mr-4 text-white" />
                  <FaTiktok onClick={opentiktok} className="text-2xl text-white" />
                </div>
            </div>
        </div>
    </div>
  )
}