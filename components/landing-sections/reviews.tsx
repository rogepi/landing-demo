'use client'

import 'swiper/css'

import { motion } from 'framer-motion'
import * as React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMediaQuery } from '@/hooks'

export function Reviews() {
  const mockData = [
    {
      title:
        'Best learning app! Every day you answer some questions and talk to this app about anything.',
      name: 'MarioGiga, Malta',
    },
    {
      title:
        'THIS APP IS VERY VERY GOOD, I seriously recommend it a lot, it has helped me a lot in fluency when speaking, 10/10.',
      name: 'HobiYG13, USA',
    },
    {
      title: `Loora is so good it's almost spooky.`,
      name: 'Manichetta, Italy',
    },
    {
      title:
        'The App is incredible, you can practice English any time, alone, but all the same time you can feel like a tutor helping you.',
      name: 'Miguel, Spain',
    },
    {
      title:
        'I love this app. It is very useful for me to improve my English. I can practice my English with native speakers.',
      name: 'Ming, China',
    },
    {
      title: 'Loora is the best app.',
      name: 'huhuhol, Brazil',
    },
    {
      title: 'Wooww. It’s very cool to learn with this app.',
      name: 'zimjunior, Senegal',
    },
  ]

  const isLG = useMediaQuery('(min-width: 1300px)')
  const isMD = useMediaQuery('(min-width: 768px)')

  return (
    <motion.section className="mx-auto mb-20 w-full max-w-[1300px] text-center">
      <motion.header className="text-3xl font-bold md:text-5xl">
        Loora is great for
        <motion.span className="text-blue-600"> freelancers</motion.span>
      </motion.header>
      {/* <motion.div
        ref={scroller}
        className="overflow-hide mx-auto my-8 flex flex-nowrap gap-10 text-pink-500"
      >
        {mockData.map((item, index) => (
          <motion.div
            key={index}
            className="flex h-[370px] w-[300px] flex-initial shrink-0 flex-col justify-between overflow-hidden rounded-xl border-[3px] border-pink-500 p-10 text-left"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="31">
                <path
                  fill="currentColor"
                  d="M7.95 14.5c3.033 0 5.317.717 6.85 2.15 1.533 1.4 2.3 3.35 2.3 5.85 0 2.3-.8 4.217-2.4 5.75-1.6 1.533-3.583 2.3-5.95 2.3-2.3 0-4.317-.9-6.05-2.7-1.7-1.8-2.55-4.467-2.55-8 0-3.533.517-6.65 1.55-9.35 1.067-2.733 2.633-4.967 4.7-6.7C8.467 2.033 11.017.817 14.05.15c.3-.067.533-.067.7 0 .2.067.3.183.3.35a.541.541 0 0 1-.15.5c-.1.133-.283.233-.55.3-2.667.667-4.783 1.683-6.35 3.05-1.567 1.367-2.7 2.833-3.4 4.4-.667 1.567-1 2.967-1 4.2 0 .5.133.883.4 1.15.267.267.733.4 1.4.4h2.55Zm18.85-.05c3.033 0 5.3.717 6.8 2.15 1.533 1.4 2.3 3.333 2.3 5.8 0 2.3-.8 4.217-2.4 5.75-1.567 1.533-3.55 2.3-5.95 2.3-2.3 0-4.3-.883-6-2.65C19.85 26 19 23.317 19 19.75c0-3.533.517-6.65 1.55-9.35 1.067-2.733 2.633-4.967 4.7-6.7C27.317 1.933 29.867.717 32.9.05c.267-.067.483-.067.65 0 .2.067.317.2.35.4 0 .167-.05.317-.15.45-.1.133-.3.25-.6.35-2.667.667-4.783 1.683-6.35 3.05-1.567 1.367-2.683 2.833-3.35 4.4-.667 1.567-1 2.967-1 4.2 0 .467.133.85.4 1.15.267.267.717.4 1.35.4h2.6Z"
                ></path>
              </svg>
              <motion.p className="mt-4 text-lg font-semibold text-black dark:text-white">
                {item.title}
              </motion.p>
            </div>
            <div>
              <motion.p className="font-semibold text-black dark:text-white">
                {item.name}
              </motion.p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="17"
                fill="none"
                aria-label="5 Stars review"
              >
                <path
                  fill="#F2C94C"
                  d="m17.241 6.241-6.198-.534L8.621 0 6.198 5.715 0 6.241l4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM37.93 6.241l-6.198-.534L29.31 0l-2.423 5.715-6.198.526 4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM58.62 6.241l-6.198-.534L49.999 0l-2.422 5.715-6.198.526 4.707 4.077-1.414 6.06 5.327-3.215 5.328 3.215-1.405-6.06 4.698-4.077ZM79.31 6.241l-6.198-.534L70.69 0l-2.423 5.715-6.198.526 4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM100 6.241l-6.198-.534L91.379 0l-2.422 5.715-6.198.526 4.707 4.077-1.414 6.06 5.327-3.215 5.328 3.215-1.405-6.06L100 6.241Z"
                ></path>
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div> */}
      <motion.div className="mx-auto my-12 flex w-full max-w-[1300px] overflow-hidden text-pink-500">
        <Swiper
          loop
          autoplay
          slidesPerView={isLG ? 4 : isMD ? 3 : 1}
          spaceBetween={30}
          modules={[Autoplay]}
        >
          {mockData.map((item) => (
            <SwiperSlide key={item.name}>
              <motion.div className="mx-auto flex h-[370px] w-[300px] flex-initial shrink-0 flex-col justify-between overflow-hidden rounded-xl border-[3px] border-pink-500 p-10 text-left">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="31"
                  >
                    <path
                      fill="currentColor"
                      d="M7.95 14.5c3.033 0 5.317.717 6.85 2.15 1.533 1.4 2.3 3.35 2.3 5.85 0 2.3-.8 4.217-2.4 5.75-1.6 1.533-3.583 2.3-5.95 2.3-2.3 0-4.317-.9-6.05-2.7-1.7-1.8-2.55-4.467-2.55-8 0-3.533.517-6.65 1.55-9.35 1.067-2.733 2.633-4.967 4.7-6.7C8.467 2.033 11.017.817 14.05.15c.3-.067.533-.067.7 0 .2.067.3.183.3.35a.541.541 0 0 1-.15.5c-.1.133-.283.233-.55.3-2.667.667-4.783 1.683-6.35 3.05-1.567 1.367-2.7 2.833-3.4 4.4-.667 1.567-1 2.967-1 4.2 0 .5.133.883.4 1.15.267.267.733.4 1.4.4h2.55Zm18.85-.05c3.033 0 5.3.717 6.8 2.15 1.533 1.4 2.3 3.333 2.3 5.8 0 2.3-.8 4.217-2.4 5.75-1.567 1.533-3.55 2.3-5.95 2.3-2.3 0-4.3-.883-6-2.65C19.85 26 19 23.317 19 19.75c0-3.533.517-6.65 1.55-9.35 1.067-2.733 2.633-4.967 4.7-6.7C27.317 1.933 29.867.717 32.9.05c.267-.067.483-.067.65 0 .2.067.317.2.35.4 0 .167-.05.317-.15.45-.1.133-.3.25-.6.35-2.667.667-4.783 1.683-6.35 3.05-1.567 1.367-2.683 2.833-3.35 4.4-.667 1.567-1 2.967-1 4.2 0 .467.133.85.4 1.15.267.267.717.4 1.35.4h2.6Z"
                    ></path>
                  </svg>
                  <motion.p className="mt-4 text-lg font-semibold text-black dark:text-white">
                    {item.title}
                  </motion.p>
                </div>
                <div>
                  <motion.p className="font-semibold text-black dark:text-white">
                    {item.name}
                  </motion.p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="17"
                    fill="none"
                    aria-label="5 Stars review"
                  >
                    <path
                      fill="#F2C94C"
                      d="m17.241 6.241-6.198-.534L8.621 0 6.198 5.715 0 6.241l4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM37.93 6.241l-6.198-.534L29.31 0l-2.423 5.715-6.198.526 4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM58.62 6.241l-6.198-.534L49.999 0l-2.422 5.715-6.198.526 4.707 4.077-1.414 6.06 5.327-3.215 5.328 3.215-1.405-6.06 4.698-4.077ZM79.31 6.241l-6.198-.534L70.69 0l-2.423 5.715-6.198.526 4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM100 6.241l-6.198-.534L91.379 0l-2.422 5.715-6.198.526 4.707 4.077-1.414 6.06 5.327-3.215 5.328 3.215-1.405-6.06L100 6.241Z"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {/* <motion.div className="h-[350px]">
        <Swiper
          height={300}
          loop
          autoplay
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          {mockData.map((item) => (
            <SwiperSlide key={item.name}>
              <motion.div className="flex h-[370px] w-[300px] flex-initial shrink-0 flex-col justify-between overflow-hidden rounded-xl p-3 text-left">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="31"
                  >
                    <path
                      fill="currentColor"
                      d="M7.95 14.5c3.033 0 5.317.717 6.85 2.15 1.533 1.4 2.3 3.35 2.3 5.85 0 2.3-.8 4.217-2.4 5.75-1.6 1.533-3.583 2.3-5.95 2.3-2.3 0-4.317-.9-6.05-2.7-1.7-1.8-2.55-4.467-2.55-8 0-3.533.517-6.65 1.55-9.35 1.067-2.733 2.633-4.967 4.7-6.7C8.467 2.033 11.017.817 14.05.15c.3-.067.533-.067.7 0 .2.067.3.183.3.35a.541.541 0 0 1-.15.5c-.1.133-.283.233-.55.3-2.667.667-4.783 1.683-6.35 3.05-1.567 1.367-2.7 2.833-3.4 4.4-.667 1.567-1 2.967-1 4.2 0 .5.133.883.4 1.15.267.267.733.4 1.4.4h2.55Zm18.85-.05c3.033 0 5.3.717 6.8 2.15 1.533 1.4 2.3 3.333 2.3 5.8 0 2.3-.8 4.217-2.4 5.75-1.567 1.533-3.55 2.3-5.95 2.3-2.3 0-4.3-.883-6-2.65C19.85 26 19 23.317 19 19.75c0-3.533.517-6.65 1.55-9.35 1.067-2.733 2.633-4.967 4.7-6.7C27.317 1.933 29.867.717 32.9.05c.267-.067.483-.067.65 0 .2.067.317.2.35.4 0 .167-.05.317-.15.45-.1.133-.3.25-.6.35-2.667.667-4.783 1.683-6.35 3.05-1.567 1.367-2.683 2.833-3.35 4.4-.667 1.567-1 2.967-1 4.2 0 .467.133.85.4 1.15.267.267.717.4 1.35.4h2.6Z"
                    ></path>
                  </svg>
                  <motion.p className="mt-4 text-lg font-semibold text-black dark:text-white">
                    {item.title}
                  </motion.p>
                </div>
                <div>
                  <motion.p className="font-semibold text-black dark:text-white">
                    {item.name}
                  </motion.p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="17"
                    fill="none"
                    aria-label="5 Stars review"
                  >
                    <path
                      fill="#F2C94C"
                      d="m17.241 6.241-6.198-.534L8.621 0 6.198 5.715 0 6.241l4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM37.93 6.241l-6.198-.534L29.31 0l-2.423 5.715-6.198.526 4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM58.62 6.241l-6.198-.534L49.999 0l-2.422 5.715-6.198.526 4.707 4.077-1.414 6.06 5.327-3.215 5.328 3.215-1.405-6.06 4.698-4.077ZM79.31 6.241l-6.198-.534L70.69 0l-2.423 5.715-6.198.526 4.707 4.077-1.414 6.06 5.328-3.215 5.327 3.215-1.405-6.06 4.698-4.077ZM100 6.241l-6.198-.534L91.379 0l-2.422 5.715-6.198.526 4.707 4.077-1.414 6.06 5.327-3.215 5.328 3.215-1.405-6.06L100 6.241Z"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div> */}
    </motion.section>
  )
}
