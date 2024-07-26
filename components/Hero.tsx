"use client"

import Image from 'next/image'
import React from 'react'
import IKN from "@/public/ikn/Thumbnail.svg"
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <div className='w-full wrapper relative flex flex-col justify-end h-[650px] text-white text-3xl p-16'>
      <Image 
        src={IKN}
        alt="Ibu Kota Nusantara"
        className='w-full h-[650px] object-cover rounded-[36px] absolute top-0 left-0 -z-20'
      />
      <motion.div 
        className='text-5xl leading-[72px]'
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.75 }}
      >
        Mewujudkan Kehidupan Lebih <br></br> Baik di Nusantara
      </motion.div>
    </div>
  )
}

export default Hero