"use client"

import Image from 'next/image'
import React from 'react'
import { Leaf } from 'lucide-react';
import { MoveDown } from 'lucide-react';
import IKN from "@/public/ikn/Thumbnail.svg"
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <div className='w-full wrapper relative flex flex-col justify-end items-center md:flex-row md:items-end md:justify-between h-[650px] text-white gap-y-8 p-8 md:p-16'>
      <Image 
        src={IKN}
        alt="Ibu Kota Nusantara"
        className='w-full h-[650px] object-cover rounded-[36px] p-4 md:p-0 absolute top-0 left-0 -z-20'
      />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.75 }}
        className='space-y-4'
      >
        <div className='border-white rounded-full w-12 flex items-center justify-center h-12 border-2'>
          <Leaf />
        </div>
        <h3 className='text-3xl md:text-5xl md:leading-[72px]'>Mewujudkan Kehidupan Lebih <br></br> Baik di Nusantara</h3>
        <p className='max-w-[750px] md:text-xl'>NusaLiving hadir untuk mewujudkan kehidupan yang lebih baik di Nusantara. Temukan solusi terbaik untuk kebutuhan sehari-hari Anda, dari hunian nyaman hingga layanan komunitas yang inspiratif.</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.75 }}
        className='flex items-center gap-x-2 text-sm cursor-pointer'
      >
        Pelajari lebih lanjut <MoveDown className='w-4 h-4' />
      </motion.div>
    </div>
  )
}

export default Hero