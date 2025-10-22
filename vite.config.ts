import { defineConfig, type PluginOption } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import matter from 'gray-matter'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

/**
 * 🧩 Pre-transform plugin that strips YAML frontmatter
 * before @mdx-js/rollup compiles MDX files.
 */
function stripFrontmatterPlugin(): PluginOption {
	return {
		name: 'strip-frontmatter',
		enforce: 'pre' as const,
		transform(src, id) {
			if (!id.endsWith('.mdx')) return
			const { data, content } = matter(src)

			// Inject `export const frontmatter = {...}` into MDX file
			return {
				code: `${content}\n\nexport const frontmatter = ${JSON.stringify(data, null, 2)};`,
				map: null,
			}
		},
	}
}

/**
 * 🎨 Prism One Dark Pro–style syntax highlighting
 * rehype-prism-plus automatically adds <code class="language-js"> tokens.
 * You can style them via CSS to match One Dark Pro.
 */
export default defineConfig({
	plugins: [
		stripFrontmatterPlugin(),
		mdx({
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		}),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
})
