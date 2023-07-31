'use client'

import { motion } from 'framer-motion'

import { IconRating } from '../icons/IconRating'

export function HeroRating() {
  return (
    <motion.section className="flex-center inner-width flex-col rounded-[65px] px-14 py-32 text-center shadow-2xl shadow-gray-200 dark:shadow-gray-900">
      <IconRating />
      <div className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
        “ Without exaggeration, Loora is the best app I have ever used. ”
      </div>
      <div>Kavhoss, Sweden</div>
      <div className="text-gray-500">App Store review 2023</div>
    </motion.section>
  )
}
