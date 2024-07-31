"use client"

import ServiceHero from '@/components/reusable/ServiceHero'
import { educationData } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import React from 'react'

const MateriPendidikan = () => {
  const pathname = usePathname()

  const data = educationData.find(item => item.path === pathname)

  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading={data?.title}
        subheading={data?.deskripsi}
        image={data?.src}
      />
      <div className='wrapper' data-aos="fade-up">
        <p>
          {data?.artikel}
        </p>
      </div>
    </div>
  )
}

export default MateriPendidikan