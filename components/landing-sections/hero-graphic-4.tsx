'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import ExpImg04A from '../../public/exp_img_04a.webp'
import ExpImg04B from '../../public/exp_img_04b.webp'
import ExpImg04C from '../../public/exp_img_04c.webp'
import ExpImg04D from '../../public/exp_img_04d.webp'
import ExpImg04E from '../../public/exp_img_04e.webp'
import ExpImg04F from '../../public/exp_img_04f.webp'

export function HeroGraphicFour() {
  return (
    <motion.section className="inner-width relative my-28 grid w-full grid-cols-2 py-28">
      <motion.div className="relative z-10 mx-auto">
        <div className="flex items-center justify-between">
          <Image src={ExpImg04A} alt="exp_img_04a" width={80} height={80} />
          <Image src={ExpImg04B} alt="exp_img_04b" width={388} height={239} />
        </div>
        <div className="flex items-center justify-between">
          <Image src={ExpImg04D} alt="exp_img_04d" width={396} height={226} />
          <Image src={ExpImg04C} alt="exp_img_04c" width={80} height={80} />
        </div>
        <div className="flex items-center justify-between">
          <Image src={ExpImg04E} alt="exp_img_04e" width={80} height={80} />
          <Image src={ExpImg04F} alt="exp_img_04f" width={396} height={233} />
        </div>
      </motion.div>
      <motion.div className="my-auto space-y-5 pr-[8%]">
        <motion.p className="flex-1 text-4xl font-extrabold">
          Talk about Anything and Everything
        </motion.p>
        <motion.p className="text-xl">
          Improve your English by chatting with Loora about anything from sports
          to tech, business, fashion, or your latest book or show. Loora is up
          for any topic.
        </motion.p>
      </motion.div>
      <motion.div className="absolute z-0 h-[450px] w-[450px] -translate-y-10 translate-x-16 transform rounded-full bg-gradient-to-b from-green-400 to-pink-300 opacity-50 blur-3xl filter" />
    </motion.section>
  )
}
