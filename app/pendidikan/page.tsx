"use client"

import React from 'react'
import Education from "@/public/services/Pendidikan.svg"
import ServiceHero from '@/components/reusable/ServiceHero'
import { Pendidikan } from '@/components/Pendidikan'

const PendidikanPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Pendidikan Berkualitas di Ibu Kota Nusantara"
        subheading='Sekolah, Universitas, dan Program Pendidikan Terdepan'
        image={Education}
      />
      <div className='wrapper flex items-center justify-center w-full h-full'>
        <Pendidikan />
      </div>
    </div>
  )
}

export default PendidikanPage