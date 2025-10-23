declare module 'remark-slug' {
  import type { Plugin } from 'unified'
  const remarkSlug: Plugin<any[]>
  export default remarkSlug
}

declare module 'remark-extract-toc' {
  import type { Plugin } from 'unified'
  const remarkExtractToc: Plugin<any[]>
  export default remarkExtractToc
}
