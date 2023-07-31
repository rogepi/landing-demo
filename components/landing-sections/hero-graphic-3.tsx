'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import ExpImage03a from '../../public/exp_img_03a.webp'
import ExpImage03b from '../../public/exp_img_03b.webp'

export function HeroGraphicThree() {
  return (
    <motion.section className="inner-width relative my-28 grid w-full grid-cols-1 py-28 md:grid-cols-2">
      <motion.div className="relative z-20 flex items-center justify-between">
        <div />
        <Image
          className="absolute left-0 z-0 translate-x-1/2 translate-y-1/2"
          src={ExpImage03a}
          width={410}
          height={391}
          alt=""
        />
        <Image
          className="absolute left-0 z-0"
          src={ExpImage03b}
          width={393}
          height={778}
          alt=""
        />
      </motion.div>
      <motion.div className="my-auto space-y-5 pr-[8%]">
        <motion.p className="flex-1 text-4xl font-extrabold">
          Stress free: Loora is here just for you
        </motion.p>
        <motion.p className="text-xl">
          Loora, your always-there AI tutor, offers a safe, judgement-free zone
          for practicing English. It’s dedicated to empowering you every step of
          the way, provides feedback and tools to boost your confidence, making
          your path to English mastery both effective and fast.
        </motion.p>
      </motion.div>
      <motion.div className="absolute right-0 top-0 z-0 h-[630px] w-[630px] rounded-full bg-gradient-to-b from-red-300 to-blue-500 opacity-20 blur-[175px]" />
    </motion.section>
  )
}
