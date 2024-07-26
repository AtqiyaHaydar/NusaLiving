"use client"

import React from 'react'
import { Button } from './ui/button'
import { LogIn, House } from 'lucide-react';
import { navItems } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='w-full fixed top-2 z-20'>
      <nav className='wrapper w-full py-6 px-16 text-white flex items-center justify-between'>
        <div className='flex justify-center items-center gap-6'>
          <h1>
            <Link href="/" className='flex gap-x-2 items-center font-bold'>
              <House className='w-5 h-5' /> NusaLiving
            </Link>
          </h1>
          {navItems.map(item => (
            <Link href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Button variant={"outline"} className='text-primary-black rounded-full flex items-center gap-x-2 hover:gap-x-4 transition-all w-[125px]'>
          Masuk <LogIn className='w-5 h-5' />
        </Button>
      </nav>
    </header>
  )
}

export default Navbar