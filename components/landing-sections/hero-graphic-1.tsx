'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { staggerContainer } from '@/lib/utils/variants'

import ExpImage01 from '../../public/exp_img_01.webp'

export function HeroGraphicOne() {
  return (
    <motion.section
      variants={staggerContainer(0, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="inner-width relative my-28 flex w-full flex-col-reverse items-center py-20 text-center md:grid md:grid-cols-2 md:text-left"
    >
      <motion.div className="my-auto mt-4 space-y-5 pr-[8%]">
        <motion.p className="flex-1 text-4xl font-extrabold">
          Practice Real-Life English in Real-Life Situations
        </motion.p>
        <motion.p className="text-xl">
          Immerse in conversations that span every situation—be it business
          meetings, job interviews, or friendly chats—and witness your fluency
          thrive where it truly matters: for you.
        </motion.p>
      </motion.div>
      <motion.div className="relative z-10 flex items-center justify-between">
        <div />
        <Image
          className="absolute left-0 z-0 hidden md:inline-block"
          src={ExpImage01}
          width={279}
          height={565}
          alt=""
        />
        <video
          className="z-40 float-right rounded-3xl"
          width={420}
          height={420}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/exp_vdo_01.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 z-0 h-[540px] w-[540px] translate-x-20 translate-y-[15px] rounded-full 
      bg-gradient-to-r from-yellow-300 via-red-500 to-blue-600 opacity-50 blur-[175px]"
      />
    </motion.section>
  )
}
