import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { tutorials } from './tutorials'
import type { Route } from './+types/$tutorialName'

/* -------------------------------------------------------------------------- */
/* 🧱 Custom MDX component styles (Tailwind + prose integration)              */
/* -------------------------------------------------------------------------- */
const mdxComponents = {
	h1: (props: any) => (
		<h1
			className='mt-6 mb-3 text-2xl font-bold sm:mt-8 sm:mb-4 sm:text-3xl'
			{...props}
		/>
	),
	h2: (props: any) => (
		<h2
			className='mt-5 mb-2 text-xl font-semibold sm:mt-6 sm:mb-3 sm:text-2xl'
			{...props}
		/>
	),
	h3: (props: any) => (
		<h3
			className='mt-4 mb-2 text-lg font-semibold sm:mt-5 sm:mb-3 sm:text-xl'
			{...props}
		/>
	),
	p: (props: any) => (
		<p className='mb-4 text-base leading-relaxed sm:text-lg' {...props} />
	),
	img: (props: any) => (
		<img className='my-5 rounded-lg shadow-md sm:my-6' {...props} />
	),
}

/* -------------------------------------------------------------------------- */
/* 🧠 Loader — dynamically imports MDX & reads injected frontmatter + TOC      */
/* -------------------------------------------------------------------------- */
export async function loader({ params }: Route.LoaderArgs) {
	const { tutorialNumber, tutorialName } = params

	if (!tutorialNumber || !tutorialName) {
		throw new Response('Invalid tutorial path', { status: 400 })
	}

	const key = `${tutorialNumber}/${tutorialName}`
	const importFunc = tutorials[key as keyof typeof tutorials]

	if (!importFunc) {
		console.error('❌ No tutorial import function found for key:', key)
		throw new Response('Tutorial not found', { status: 404 })
	}

	try {
		const mod = await importFunc()
		const frontmatter =
			(mod as { frontmatter?: Record<string, any> }).frontmatter ?? null
		const toc = (mod as { toc?: any[] }).toc ?? []

		return { key, frontmatter, toc }
	} catch (error) {
		console.error('⚠️ Loader failed to import MDX file:', error)
		throw new Response('Failed to load tutorial content', { status: 500 })
	}
}

/* -------------------------------------------------------------------------- */
/* 🚀 Component — renders MDX tutorial with metadata header + TOC              */
/* -------------------------------------------------------------------------- */
export default function TutorialPage({ loaderData }: Route.ComponentProps) {
	const { key, frontmatter, toc } = loaderData
	const [Component, setComponent] = React.useState<React.ComponentType | null>(
		null,
	)

	React.useEffect(() => {
		let isMounted = true
		const importFunc = tutorials[key as keyof typeof tutorials]

		if (!importFunc) {
			console.error('❌ No importFunc found for key:', key)
			return
		}

		importFunc()
			.then(mod => {
				console.log('✅ Imported MDX module:', mod)
				if (isMounted && mod?.default) {
					~setComponent(() => mod.default)
				} else {
					console.error('❌ MDX module missing default export:', mod)
				}
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
		<main className='mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 dark:bg-gray-900 dark:text-gray-100'>
			{/* Frontmatter Header */}
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

			{/* Table of Contents */}
			{toc && toc.length > 0 && (
				<nav className='mb-8 border-l-2 border-blue-200 pl-4 text-sm leading-relaxed'>
					<h2 className='mb-2 text-lg font-semibold text-blue-600'>
						Table of Contents
					</h2>
					<ul className='space-y-1'>
						{toc.map(item => (
							<li
								key={item.url}
								className={['ml-0', 'ml-4', 'ml-8'][item.depth - 1] ?? 'ml-0'}
							>
								<a
									href={item.url}
									className='text-blue-600 hover:underline dark:text-blue-400'
								>
									{item.value}
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}

			{/* MDX Content */}
			<article className='prose dark:prose-invert prose-img:rounded-lg'>
				<MDXProvider components={mdxComponents}>
					<Component />
				</MDXProvider>
			</article>
		</main>
	)
}
