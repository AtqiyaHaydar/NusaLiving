"use client"

import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <main className="mt-2 flex flex-col items-center gap-y-20">
      <Hero />
      <AboutUs />
      <Services />
    </main>
  );
}
