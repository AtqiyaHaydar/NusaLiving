"use client"

import { educationData } from '@/lib/constants'
import { usePathname } from 'next/navigation'
import React from 'react'

const MateriPendidikan = () => {
  const pathname = usePathname()

  const data = educationData.find(item => item.path === pathname)
  
  return (
    <div className="mt-2 flex flex-col items-center gap-y-20">
      
      
    </div>
  )
}

export default MateriPendidikan