'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import HeroImg1 from '../../public/hero_img_01.webp'
import HeroImg2 from '../../public/hero_img_02.webp'
import HeroImg3 from '../../public/hero_img_03.webp'
import HeroImg4 from '../../public/hero_img_04.webp'

export function HeroDemo() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <motion.section
      variants={container}
      className="flex-center inner-width relative w-full py-12"
    >
      <video
        className="border-10 z-10 overflow-hidden rounded-[28px] shadow-inner"
        width={353}
        height={617}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero_vdo.mp4"></source>
      </video>
      <motion.div
        variants={item}
        className="absolute top-6 z-0 -translate-x-3/4 -rotate-6 transform"
      >
        <Image src={HeroImg1} alt="hero image" width={260} height={282} />
      </motion.div>
      <motion.div className="absolute bottom-14 z-0 -translate-x-full -rotate-12 transform">
        <Image src={HeroImg2} alt="hero image" width={260} height={282} />
      </motion.div>
      <motion.div className="absolute top-6 z-0 translate-x-3/4 rotate-6 transform">
        <Image src={HeroImg3} alt="hero image" width={260} height={282} />
      </motion.div>
      <motion.div className="absolute bottom-14 z-0 translate-x-full rotate-12 transform">
        <Image src={HeroImg4} alt="hero image" width={260} height={282} />
      </motion.div>
    </motion.section>
  )
}
