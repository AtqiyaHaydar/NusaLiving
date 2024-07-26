"use client"

import React from 'react'
import { navItems } from '@/lib/constants'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='wrapper w-full flex flex-col md:flex-row justify-start gap-x-8 items-start'>
      <h3 className='w-[250px] hidden md:block' data-aos="fade-right">Layanan</h3>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {navItems.map(item => (
          <div data-aos="fade-up">
          <CardContainer>
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl p-6 border h-[425px]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.label}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services