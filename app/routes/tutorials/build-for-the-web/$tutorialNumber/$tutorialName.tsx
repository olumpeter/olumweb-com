import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import type { Route } from './+types/$tutorialName'

// Make sure to import Night Owl CSS once in your global entry or app.css
// import 'highlight.js/styles/night-owl.css';

export function loader({ params }: Route.LoaderArgs) {
	const { tutorialNumber, tutorialName } = params

	if (typeof tutorialNumber !== 'string' || typeof tutorialName !== 'string') {
		throw new Response('Invalid tutorial path', { status: 400 })
	}

	const filePath = path.join(
		process.cwd(),
		'app/tutorials/build-for-the-web',
		tutorialNumber,
		`${tutorialName}.md`,
	)

	if (!fs.existsSync(filePath)) {
		throw new Response('Tutorial not found', { status: 404 })
	}

	const fileContent = fs.readFileSync(filePath, 'utf8')
	const { data: frontMatter, content: body } = matter(fileContent)

	// Rewrite relative image paths to /app/assets/... for browser access
	const updatedBody = body.replace(
		/!\[([^\]]*)]\((\.\/images\/[^\)]+)\)/g,
		(_: string, alt: string, relPath: string) => {
			const fileName = relPath.split('/').pop() ?? ''
			const assetsPath = `/app/assets/tutorials/build-for-the-web/${tutorialNumber}/${tutorialName}/images/${fileName}`
			return `![${alt}](${assetsPath})`
		},
	)

	return { frontMatter, updatedBody }
}

export default function TutorialPage({ loaderData }: Route.ComponentProps) {
	const { frontMatter, updatedBody } = loaderData

	return (
		<main className='mx-auto max-w-3xl px-4 py-10 dark:bg-gray-900 dark:text-gray-100'>
			{frontMatter?.title && (
				<header className='mb-8'>
					<h1 className='mb-2 text-4xl font-bold'>{frontMatter.title}</h1>
					{frontMatter.subtitle && (
						<p className='text-lg text-gray-500 italic dark:text-gray-400'>
							{frontMatter.subtitle}
						</p>
					)}
				</header>
			)}

			<article className='prose prose-lg dark:prose-invert prose-headings:scroll-mt-20'>
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeHighlight]}
					components={{
						img: ({ ...props }) => (
							<img
								{...props}
								className='h-auto max-w-full rounded-md shadow-sm'
							/>
						),
						table: ({ ...props }) => (
							<div className='overflow-x-auto'>
								<table
									{...props}
									className='w-full table-auto border-collapse'
								/>
							</div>
						),
						code: ({ className, ...props }) => (
							<code
								{...props}
								className={`rounded px-1 py-0.5 font-mono text-sm ${className ?? ''}`}
							/>
						),
					}}
				>
					{updatedBody}
				</Markdown>
			</article>
		</main>
	)
}
