"use client"

import React from 'react'
import Environment from "@/public/services/Lingkungan.svg"
import ServiceHero from '@/components/reusable/ServiceHero'

const LingkunganPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Lingkungan Hidup di Ibu Kota Nusantara"
        subheading='Upaya Keberlanjutan dan Pelestarian Alam di IKN'
        image={Environment}
      />
    </div>
  )
}

export default LingkunganPage