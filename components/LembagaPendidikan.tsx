import React from 'react'
import { GraduationCap } from 'lucide-react';
import { institutionItems } from '@/lib/constants';
import Image from 'next/image';

const LembagaPendidikan = () => {
  return (
    <div className='h-full w-full border rounded-lg p-4'>
      <h3 className='text-center md:text-start flex gap-2 font-bold'>
        <GraduationCap /> LembagaPendidikan
      </h3>
      <ul className='grid grid-cols-1 gap-6 mt-6'>
        {institutionItems.map(item => (
          <li key={item.judul} className='flex flex-col md:flex-row items-center text-center gap-4'>
            <Image 
              src={item.gambarMiniatur}
              alt={item.judul}
              className='rounded-lg h-[150px] md:h-[100px] w-full md:w-[200px] object-cover shadow-md'
            />
            <div className='text-start w-full'>
              <h5>{item.judul}</h5>
              <p className='text-muted-foreground text-sm '>{item.deskripsi}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LembagaPendidikan