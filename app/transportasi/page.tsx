"use client"

import React from 'react'
import Transport from "@/public/services/Transportasi.svg"
import ServiceHero from '@/components/reusable/ServiceHero'

const TransportasiPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Sistem Transportasi Modern di Ibu Kota Nusantara"
        subheading='Inovasi dan Pengembangan Transportasi untuk Mobilitas yang Lebih Baik'
        image={Transport}
      />
    </div>
  )
}

export default TransportasiPage