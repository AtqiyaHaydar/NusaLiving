"use client"

import React from 'react'
import Education from "@/public/services/Pendidikan.svg"
import ServiceHero from '@/components/reusable/ServiceHero'
import { Pendidikan } from '@/components/Pendidikan'
import LembagaPendidikan from '@/components/LembagaPendidikan'

const PendidikanPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Pendidikan Berkualitas di Ibu Kota Nusantara"
        subheading='Sekolah, Universitas, dan Program Pendidikan Terdepan'
        image={Education}
      />
      <div className='wrapper flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-between w-full h-full' data-aos="fade-up">
        <Pendidikan />
        <LembagaPendidikan />
      </div>
    </div>
  )
}

export default PendidikanPage