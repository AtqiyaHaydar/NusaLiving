"use client"

import React from 'react'
import News from "@/public/services/Berita.svg"
import ServiceHero from '@/components/reusable/ServiceHero'

const BeritaPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Berita Terbaru Ibu Kota Nusantara"
        subheading='Informasi Terkini Tentang Pembangunan dan Perkembangan IKN'
        image={News}
      />
    </div>
  )
}

export default BeritaPage