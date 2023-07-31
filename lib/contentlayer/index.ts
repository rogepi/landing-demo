import { type AllTypes } from 'contentlayer/generated'
import { defineDocumentType } from 'contentlayer/source-files'
import path from 'path'

export function getSlugAndLocale(post: AllTypes) {
  const result = path
    .basename(post._raw.sourceFileName, '.mdx')
    .split('.')
    .filter(Boolean)
  if (result.length !== 2) throw new Error('NOPE')
  return result as [string, string]
}

export function computeLocaleData(dir: string) {
  return {
    locale: {
      type: 'string' as const,
      resolve: (post: AllTypes) => {
        const [, locale] = getSlugAndLocale(post)
        return locale
      },
    },
    slug: {
      type: 'string' as const,
      resolve: (post: AllTypes) => {
        const [slug] = getSlugAndLocale(post)
        return slug
      },
    },
    url: {
      type: 'string' as const,
      resolve: (post: AllTypes) => {
        const [slug] = getSlugAndLocale(post)
        if (dir === 'posts') {
          return `/${slug}`
        }
        return `/${dir}/${slug}`
      },
    },
  }
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    ...computeLocaleData('posts'),
  },
}))
