import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { tutorials } from './tutorials'
import type { Route } from './+types/$tutorialName'

/* -------------------------------------------------------------------------- */
/* 🧱 Custom MDX component styles (Tailwind + prose integration)              */
/* -------------------------------------------------------------------------- */
const mdxComponents = {
	h1: (props: any) => (
		<h1 className='mt-8 mb-4 text-3xl font-bold' {...props} />
	),
	h2: (props: any) => (
		<h2 className='mt-6 mb-3 text-2xl font-semibold' {...props} />
	),
	p: (props: any) => <p className='mb-4 leading-relaxed' {...props} />,
	img: (props: any) => <img className='my-6 rounded-lg shadow-md' {...props} />,
}

/* -------------------------------------------------------------------------- */
/* 🧠 Loader — dynamically imports MDX & reads injected frontmatter           */
/* -------------------------------------------------------------------------- */
export async function loader({ params }: Route.LoaderArgs) {
	const { tutorialNumber, tutorialName } = params

	if (!tutorialNumber || !tutorialName) {
		throw new Response('Invalid tutorial path', { status: 400 })
	}

	const key = `${tutorialNumber}/${tutorialName}`
	const importFunc = tutorials[key as keyof typeof tutorials]

	if (!importFunc) {
		throw new Response('Tutorial not found', { status: 404 })
	}

	const mod = await importFunc()
	const frontmatter =
		(mod as { frontmatter?: Record<string, any> }).frontmatter ?? null

	return { key, frontmatter }
}

/* -------------------------------------------------------------------------- */
/* 🚀 Component — renders MDX tutorial with metadata header                   */
/* -------------------------------------------------------------------------- */
export default function TutorialPage({ loaderData }: Route.ComponentProps) {
	const { key, frontmatter } = loaderData
	const [Component, setComponent] = React.useState<React.ComponentType | null>(
		null,
	)

	React.useEffect(() => {
		let isMounted = true
		const importFunc = tutorials[key as keyof typeof tutorials]

		if (!importFunc) return

		importFunc()
			.then(mod => {
				if (isMounted) setComponent(() => mod.default)
			})
			.catch(err => console.error('⚠️ Failed to load tutorial module:', err))

		return () => {
			isMounted = false
		}
	}, [key])

	if (!Component) {
		return <p className='px-4 py-10 text-center'>Loading tutorial...</p>
	}

	return (
		<main className='mx-auto max-w-3xl px-4 py-10 dark:bg-gray-900 dark:text-gray-100'>
			{frontmatter && (
				<header className='mb-8'>
					{frontmatter.title && (
						<h1 className='mb-2 text-4xl font-bold'>{frontmatter.title}</h1>
					)}
					{frontmatter.subtitle && (
						<p className='text-gray-500 italic dark:text-gray-400'>
							{frontmatter.subtitle}
						</p>
					)}
				</header>
			)}

			<article className='prose dark:prose-invert prose-img:rounded-lg'>
				<MDXProvider components={mdxComponents}>
					<Component />
				</MDXProvider>
			</article>
		</main>
	)
}
