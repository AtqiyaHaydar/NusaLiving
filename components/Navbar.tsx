"use client"

import React from 'react'
import { Button } from './ui/button'
import { LogIn, House } from 'lucide-react';
import { navItems } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const fadeDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const Navbar = () => {
  const pathname = usePathname()

  return (
    <motion.header 
      className='w-full fixed top-2 z-20'
      initial="hidden"
        animate="visible"
        variants={fadeDownVariants}
        transition={{ duration: 0.75 }}
    >
      <nav className='hidden wrapper w-full py-6 px-16 text-white md:flex items-center justify-between'>
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
      <div className='flex md:hidden px-4 py-8 text-white justify-between items-center bg-white/25 backdrop-blur-sm fixed top-0 left-0 w-full'>
        <h1>
          <Link href="/" className='flex gap-x-2 items-center font-bold'>
            <House className='w-5 h-5' /> NusaLiving
          </Link>
        </h1>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className='w-full h-full flex flex-col items-center justify-center gap-8'>
            <h1 className='text-xl font-bold text-primary-green'>NusaLiving</h1>
            <ul className='flex flex-col gap-8 items-center'>
              {navItems.map(item => (
                <Link href={item.href}>
                  {item.label}
                </Link>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

export default Navbar