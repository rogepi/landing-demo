import Link from 'next/link'

export function HeroTitle() {
  return (
    <section className="inner-width flex-center mx-auto my-14 flex-col text-center">
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
        Unlock your full potential with your very own{' '}
        <strong className=" text-blue-600">AI English tutor</strong>
      </div>
      <div className="text-md mx-auto mt-8 w-full max-w-[80%] md:text-lg lg:text-xl xl:text-2xl">
        Speak fluent English with Loora, the most advanced AI tutor. Engage in
        conversations, receive feedback, and open doors to limitless
        opportunities.
      </div>
      <Link
        href="#"
        className="hero-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="currentColor"
            d="M17.68 11.771c.01-.849.23-1.681.643-2.419a4.974 4.974 0 0 1 1.715-1.8 5.107 5.107 0 0 0-1.744-1.577 5.012 5.012 0 0 0-2.254-.618c-1.679-.183-3.308 1.016-4.168 1.016-.86 0-2.189-1.016-3.608-1.016-.917.03-1.81.302-2.594.788a5.359 5.359 0 0 0-1.874 1.987c-1.93 3.395-.49 8.396 1.36 11.182.929 1.352 1.998 2.856 3.428 2.795 1.43-.06 1.909-.894 3.578-.894 1.67 0 2.14.894 3.588.864 1.45-.03 2.43-1.352 3.319-2.714a11.105 11.105 0 0 0 1.52-3.142 4.797 4.797 0 0 1-2.111-1.782 4.918 4.918 0 0 1-.798-2.67ZM14.95 3.548A4.996 4.996 0 0 0 16.06 0a4.892 4.892 0 0 0-3.188 1.698 4.683 4.683 0 0 0-.913 1.59 4.738 4.738 0 0 0-.237 1.825 4.05 4.05 0 0 0 1.79-.407 4.118 4.118 0 0 0 1.439-1.158Z"
          ></path>
        </svg>
        Get Loora Now
      </Link>
    </section>
  )
}
