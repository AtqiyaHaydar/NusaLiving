"use client"

import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from 'framer-motion';

const aboutUsWord = "NusaLiving didirikan dengan visi untuk menciptakan kehidupan yang lebih baik di Nusantara. Kami percaya bahwa setiap individu layak menikmati lingkungan yang nyaman, harmonis, dan mendukung perkembangan pribadi maupun komunitas."

const AboutUs = () => {
  return (
    <div className='wrapper w-full flex flex-col md:flex-row justify-between gap-x-8 items-start'>
      <h3 
        className='w-[250px] hidden md:block'
        data-aos="fade-right"
      >
        Tentang Kami
      </h3>
      <div 
        className='w-full'
        data-aos="fade-left"
      >
        <TextGenerateEffect className='text-center md:text-start' words={aboutUsWord} />
      </div>
    </div>
  )
}

export default AboutUs