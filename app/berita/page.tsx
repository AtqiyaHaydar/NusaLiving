"use client"

import React from 'react'
import News from "@/public/services/Berita.svg"
import ServiceHero from '@/components/reusable/ServiceHero'
import { newsItems } from '@/lib/constants'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'

const BeritaPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Berita Terbaru Ibu Kota Nusantara"
        subheading='Informasi Terkini Tentang Pembangunan dan Perkembangan IKN'
        image={News}
      />
      <div className='wrapper flex items-center justify-center w-full h-full'>
        <div className='w-full grid gap-2 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
        {newsItems.map(item => (
          <div data-aos="fade-up">
            <Dialog>
              <DialogTrigger>
                <CardContainer>
                  <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto text-start rounded-xl p-6 border h-auto md:h-[450px] lg:h-[425px]">
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={item.gambarMiniatur}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl text-start"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white mt-2 text-start" 
                    >
                      {item.judul}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {item.deskripsi}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </DialogTrigger>
              <DialogContent>
                <Image 
                  src={item.gambarMiniatur}
                  alt={item.judul}
                  className='w-full md:w-[500px] h-[250px] shadow-md object-cover rounded-md'
                />
                <div className='flex flex-col items-start justify-start gap-2'>
                  <div className='space-y-2'>
                    <h3 className='font-bold'>{item.judul}</h3>
                    <h5 className='font'>{item.deskripsi}</h5>
                  </div>
                  <div className='w-full flex justify-between text-muted-foreground text-sm'>
                    <p>{item.pengarang}</p>
                    <p>{item.tanggalTerbit}</p>
                  </div>
                  <p>
                    {item.isiArtikel}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
        
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default BeritaPage