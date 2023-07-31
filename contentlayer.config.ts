import { makeSource } from 'contentlayer/source-files'

import { Post } from './lib/contentlayer'

export default makeSource({
  contentDirExclude: ['dictionaries'],
  contentDirPath: 'content',
  documentTypes: [Post],
})
