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

const BeritaPage = () => {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      <ServiceHero 
        heading="Berita Terbaru Ibu Kota Nusantara"
        subheading='Informasi Terkini Tentang Pembangunan dan Perkembangan IKN'
        image={News}
      />
      {newsItems.map(item => (
        <Card key={item.judul}>

        </Card>
      ))}
    </div>
  )
}

export default BeritaPage