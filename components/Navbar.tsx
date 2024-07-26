"use client"

import React from 'react'
import { Button } from './ui/button'
import { LogIn, House } from 'lucide-react';
import { navItems } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

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
    </motion.header>
  )
}

export default Navbar