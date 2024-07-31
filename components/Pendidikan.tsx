"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";

export function Pendidikan() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto h-full w-full gap-4 border rounded-lg">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

import BahasaInggris from "@/public/education/BahasaInggris.svg"
import Literasi from "@/public/education/Literasi.svg"
import Matematika from "@/public/education/Matematika.svg"
import Motivasi from "@/public/education/Motivasi.svg"
import PeranTeknologi from "@/public/education/PeranTeknologi.svg"

const cards = [
  {
    description: "Belajar Bahasa Inggris",
    title: "Tips Belajar Bahasa Inggris",
    src: BahasaInggris,
    ctaText: "Baca",
    ctaLink: "https://contoh.com/tips-belajar-bahasa-inggris",
    content: () => {
      return (
        <p>
          Belajar Bahasa Inggris bisa menjadi lebih menyenangkan dengan
          pendekatan yang tepat. Cobalah untuk menonton film atau mendengarkan
          musik dalam Bahasa Inggris, baca buku atau artikel yang menarik
          perhatian Anda, dan praktikkan berbicara dengan teman atau komunitas
          yang mendukung. Selain itu, aplikasi pembelajaran bahasa seperti
          Duolingo atau Babbel bisa menjadi alat bantu yang efektif. Ingat,
          konsistensi adalah kunci!
        </p>
      );
    },
  },
  {
    description: "Matematika",
    title: "Cara Mudah Memahami Matematika",
    src: Matematika,
    ctaText: "Baca",
    ctaLink: "https://contoh.com/cara-mudah-matematika",
    content: () => {
      return (
        <p>
          Memahami Matematika bisa menjadi tantangan, namun dengan metode yang
          tepat, Anda bisa menguasainya. Mulailah dengan memahami konsep dasar
          sebelum melangkah ke topik yang lebih kompleks. Gunakan visualisasi
          dan alat bantu seperti diagram atau grafik untuk membantu memahami
          konsep. Latihan soal secara rutin juga sangat penting untuk meningkatkan pemahaman dan keterampilan Anda.
        </p>
      );
    },
  },
  {
    description: "Teknologi Informasi",
    title: "Peran Teknologi dalam Pendidikan",
    src: PeranTeknologi,
    ctaText: "Baca",
    ctaLink: "https://contoh.com/peran-teknologi-pendidikan",
    content: () => {
      return (
        <p>
          Teknologi telah membawa banyak perubahan positif dalam dunia
          pendidikan. Dari pembelajaran jarak jauh hingga penggunaan aplikasi
          edukasi, teknologi memudahkan akses ke sumber belajar yang lebih luas.
          Guru dan siswa kini bisa berkolaborasi lebih efektif melalui platform
          digital seperti Google Classroom atau Microsoft Teams. Penggunaan
          teknologi juga memungkinkan penyesuaian metode pembelajaran sesuai
          kebutuhan masing-masing siswa.
        </p>
      );
    },
  },
  {
    description: "Literasi",
    title: "Pentingnya Literasi di Era Digital",
    src: Literasi,
    ctaText: "Baca",
    ctaLink: "https://contoh.com/pentingnya-literasi-digital",
    content: () => {
      return (
        <p>
          Literasi tidak hanya berarti kemampuan membaca dan menulis, tetapi
          juga kemampuan memahami dan mengevaluasi informasi yang ditemukan di
          internet. Di era digital ini, literasi digital sangat penting untuk
          memastikan informasi yang kita terima akurat dan dapat dipercaya.
          Ajarkan anak-anak dan remaja untuk selalu memeriksa sumber informasi
          dan berpikir kritis terhadap apa yang mereka baca di media sosial.
        </p>
      );
    },
  },
  {
    description: "Motivasi Belajar",
    title: "Cara Meningkatkan Motivasi Belajar",
    src: Motivasi,
    ctaText: "Baca",
    ctaLink: "https://contoh.com/meningkatkan-motivasi-belajar",
    content: () => {
      return (
        <p>
          Menjaga motivasi belajar bisa menjadi tantangan, terutama di masa-masa
          sulit. Tetapkan tujuan belajar yang jelas dan realistis, ciptakan
          lingkungan belajar yang nyaman, dan gunakan metode belajar yang
          menyenangkan seperti permainan edukasi atau proyek kreatif. Jangan
          lupa untuk memberikan reward kepada diri sendiri setelah mencapai
          target belajar tertentu. Dukungan dari keluarga dan teman juga sangat
          penting untuk tetap termotivasi.
        </p>
      );
    },
  },
];