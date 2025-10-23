import { defineConfig, type PluginOption } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import matter from 'gray-matter'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypePrismPlus from 'rehype-prism-plus'

/**
 * 🧹 Strip YAML frontmatter and inject as JS export
 */
function stripFrontmatterPlugin(): PluginOption {
	return {
		name: 'strip-frontmatter',
		enforce: 'pre',
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
	optimizeDeps: {
		exclude: ['rehype-prism-plus', '@mdx-js/react'],
	},
	plugins: [
		stripFrontmatterPlugin(),
		mdx({
			remarkPlugins: [
				remarkSlug,
				[
					remarkToc,
					{
						heading: 'Table of Contents', // this is the marker heading
						tight: true,
						maxDepth: 3,
					},
				],
			],
			rehypePlugins: [rehypePrismPlus],
		}),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
})
