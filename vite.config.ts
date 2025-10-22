import { defineConfig, type PluginOption } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import matter from 'gray-matter'

/**
 * 🧩 Pre-transform plugin that strips YAML frontmatter
 * before @mdx-js/rollup compiles MDX files.
 */
function stripFrontmatterPlugin(): PluginOption {
	return {
		name: 'strip-frontmatter',
		enforce: 'pre' as const, // ✅ Type-safe literal
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

export default defineConfig({
	plugins: [
		stripFrontmatterPlugin(),
		mdx(),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
})
