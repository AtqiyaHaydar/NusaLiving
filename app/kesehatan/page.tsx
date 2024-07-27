"use client"

import React from 'react'
import Health from "@/public/services/Kesehatan.svg"
import ServiceHero from '@/components/reusable/ServiceHero'

const KesehatanPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Fasilitas Kesehatan Terbaik di Ibu Kota Nusantara"
        subheading='elayanan Medis Unggulan dan Kesehatan Masyarakat'
        image={Health}
      />
    </div>
  )
}

export default KesehatanPage