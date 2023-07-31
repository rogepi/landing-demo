import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'

import { getMessages } from '@/lib/i18n/server'

// eslint-disable-next-line @typescript-eslint/require-await
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post?.title }
}

type PostParams = { locale: LocaleType; slug: string }
const PostLayout = async ({
  params: { locale, slug },
}: {
  params: PostParams
}) => {
  const post = allPosts
    .filter((post) => post.locale === locale)
    .find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }
  const messages = await getMessages(locale)

  const Content = getMDXComponent(post.body.code)

  return (
    <>
      <div className="inner-width">
        <Link
          className="flex items-center font-medium hover:text-blue-600"
          href="/blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
            />
          </svg>
          {messages.Blog.back}
        </Link>
      </div>
      <article className="prose mx-auto max-w-xl py-8 dark:prose-invert md:prose-lg">
        <div className="mb-8 text-center">
          <h1>{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <Content />
      </article>
      <div className="absolute right-0 top-0 z-0 h-[630px] w-[630px] rounded-full bg-gradient-to-b from-red-300 to-blue-500 opacity-20 blur-[175px]" />
    </>
  )
}

export default PostLayout
