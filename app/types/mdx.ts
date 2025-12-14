declare module '*.mdx' {
	import * as React from 'react'

	const Component: React.ComponentType<any>
	export default Component

	export const frontmatter: Record<string, any>
}
