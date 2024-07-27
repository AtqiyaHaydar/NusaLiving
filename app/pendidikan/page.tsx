"use client"

import Image from 'next/image'
import React from 'react'
import Education from "@/public/services/Pendidikan.svg"

const PendidikanPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <div className='w-full wrapper relative flex flex-col justify-end items-center md:flex-row md:items-end md:justify-between h-[325px] text-white gap-y-8 p-8 md:p-16'>
        <Image 
          src={Education}
          alt="Pendidikan"
          className='w-full h-[325px] object-cover rounded-[48px] p-4 md:p-0 absolute top-0 left-0 -z-20'
        />
      </div>
    </div>
  )
}

export default PendidikanPage