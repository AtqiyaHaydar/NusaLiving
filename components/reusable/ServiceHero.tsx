"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceHero = ({ 
  heading, subheading, image 
}:{
  heading: string | undefined,
  subheading: string | undefined,
  image: string,
}) => {
  return (
    <div className='w-full wrapper relative flex flex-col justify-end items-center md:flex-row md:items-end md:justify-between h-[325px] text-white gap-y-8 p-8 md:p-16'>
      <Image 
        src={image}
        alt="Berita"
        className='w-full h-[325px] object-cover rounded-[48px] p-4 md:p-0 absolute top-0 left-0 -z-20'
      />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.75 }}
        className='space-y-4'
      >
        <h3 className='text-xl md:text-3xl md:leading-[36px]'>{heading}</h3>
        <p className='max-w-[750px]'>{subheading}</p>
      </motion.div>
    </div>
  )
}

export default ServiceHero