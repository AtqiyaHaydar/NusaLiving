import Image from 'next/image'
import React from 'react'
import IKN from "@/public/ikn/iknhd 1.svg"

const Hero = () => {
  return (
    <div className='w-full wrapper relative'>
      <Image 
        src={IKN}
        alt="Ibu Kota Nusantara"
        className='w-full h-[650px] object-cover rounded-[48px] '
      />
    </div>
  )
}

export default Hero