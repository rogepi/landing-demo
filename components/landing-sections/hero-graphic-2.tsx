'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import Exp02Device from '../../public/exp_02_device.webp'
import ExpImg02a from '../../public/exp_img_02a.webp'
import ExpImg02b from '../../public/exp_img_02b.webp'

export function HeroGraphicTwo() {
  return (
    <motion.section className="inner-width relative my-28 grid w-full grid-cols-1 py-28 md:grid-cols-2">
      <motion.div className="relative z-10 mx-auto mb-5 md:mb-0">
        <motion.div className="z-20">
          <Image
            className="border-10"
            src={Exp02Device}
            alt="exp_02_device"
            width={320}
            height={618}
          />
        </motion.div>
        <Image
          className="absolute right-0 top-0 -z-10 -translate-y-1/2 translate-x-3/4 rotate-12"
          src={ExpImg02a}
          alt="exp_img_02a"
          width={250}
          height={253}
        />
        <Image
          className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2 -rotate-12"
          src={ExpImg02b}
          alt="exp_img_02b"
          width={275}
          height={215}
        />
      </motion.div>
      <motion.div className="z-10 my-auto space-y-5 pr-[8%]">
        <motion.p className="flex-1 text-4xl font-extrabold">
          Instant English Evaluation & Feedback
        </motion.p>
        <motion.p className="text-xl">
          Maximize your potential with real-time feedback. Perfect
          pronunciation, fix grammar, embrace rephrasing, and enhance your
          accent. Thrive on continuous improvement.
        </motion.p>
      </motion.div>
      <motion.div className="absolute z-0 h-[450px] w-[450px] -translate-y-10 translate-x-16 transform rounded-full bg-gradient-to-b from-green-400 to-pink-300 opacity-50 blur-3xl filter" />
    </motion.section>
  )
}
