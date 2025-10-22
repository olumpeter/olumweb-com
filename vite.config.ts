import { defineConfig, type PluginOption } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

/**
 * 🧩 Pre-transform plugin that strips YAML frontmatter
 */
function stripFrontmatterPlugin(): PluginOption {
	return {
		name: 'strip-frontmatter',
		enforce: 'pre' as const,
		transform(src, id) {
			if (!id.endsWith('.mdx')) return
			const { data, content } = matter(src)
			return {
				code: `${content}\n\nexport const frontmatter = ${JSON.stringify(
					data,
					null,
					2,
				)};`,
				map: null,
			}
		},
	}
}

export default defineConfig({
	plugins: [
		stripFrontmatterPlugin(),
		mdx({
			// 👇 TypeScript fix: cast to `any`
			remarkPlugins: [
				remarkGfm as any,
				remarkSlug as any,
				[
					remarkAutolinkHeadings as any,
					{
						behavior: 'append',
						linkProperties: {
							className: 'heading-anchor',
							'aria-hidden': 'true',
						},
					},
				],
			],
			rehypePlugins: [rehypePrism as any],
		}),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
})
