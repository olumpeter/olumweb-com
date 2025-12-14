import { Link } from 'react-router'

// Logos
import eslintLogo from '~/assets/home-page/eslint-icon.svg?url'
import gitLogo from '~/assets/home-page/git-logo.svg?url'
import githubLogo from '~/assets/home-page/github-logo.svg?url'
import nodeLogo from '~/assets/home-page/node-js-logo-green.svg?url'
import npmLogo from '~/assets/home-page/npm-logo-red.svg?url'
import prettierLogo from '~/assets/home-page/prettier-avatar-dark.svg?url'
import prismaLogo from '~/assets/home-page/prisma-logo.svg?url'
import reactLogo from '~/assets/home-page/react_logo.svg?url'
import rrv7Logo from '~/assets/home-page/rrv7_logo_light.svg?url'
import sqliteLogo from '~/assets/home-page/sqlite-logo.svg?url'
import tailwindLogo from '~/assets/home-page/tailwind_css_logo.svg?url'
import tsLogo from '~/assets/home-page/ts_logo_512.svg?url'
import vscodeLogo from '~/assets/home-page/vscode-logo.svg?url'
import zodLogo from '~/assets/home-page/zod-logo.svg?url'

// Tech Section Data
const TECH_SECTIONS = {
	foundations: {
		title: 'Foundations',
		description:
			'These are the core technologies that power the UI layer of your app — the tools you’ll use every day when building features.',
		items: [
			{ name: 'React', logoUrl: reactLogo },
			{ name: 'TypeScript', logoUrl: tsLogo },
			{ name: 'React Router v7', logoUrl: rrv7Logo },
			{ name: 'Tailwind CSS', logoUrl: tailwindLogo },
		],
	},

	serverAndData: {
		title: 'Server & Data',
		description:
			'These tools handle your app’s data layer — validating input, talking to the database, and powering server-side logic.',
		items: [
			{ name: 'Node.js', logoUrl: nodeLogo },
			{ name: 'SQLite', logoUrl: sqliteLogo },
			{ name: 'Prisma', logoUrl: prismaLogo },
			{ name: 'Zod', logoUrl: zodLogo },
		],
	},

	devTools: {
		title: 'Developer Tools',
		description:
			'These tools support your workflow — formatting code, managing packages, tracking changes, and helping you move faster with confidence.',
		items: [
			{ name: 'NPM', logoUrl: npmLogo },
			{ name: 'VS Code', logoUrl: vscodeLogo },
			{ name: 'Git', logoUrl: gitLogo },
			{ name: 'GitHub', logoUrl: githubLogo },
			{ name: 'ESLint', logoUrl: eslintLogo },
			{ name: 'Prettier', logoUrl: prettierLogo },
		],
	},
}

export default function Home() {
	return (
		<>
			<div className='mx-auto max-w-3xl px-(--page-padding-inline) py-16'>
				{/* HERO */}
				<section>
					<h1
						className='text-2xl sm:text-3xl lg:text-4xl font-semibold
							tracking-tight leading-tight text-(--color-foreground)'
					>
						Build and ship full-stack web apps the modern way
					</h1>

					<p
						className='mt-5 text-[clamp(1rem,0.9rem+0.4vw,1.15rem)]
							leading-[1.65] text-(--color-hero-subtitle) max-w-[65ch]'
					>
						Learn how to build real-world, modern web applications using React,
						TypeScript, React Router, Node.js, Tailwind CSS, and more —
						explained simply, clearly, and practically.
					</p>
				</section>

				{/* TECH SECTIONS */}
				<div className='flex flex-col gap-16 py-16'>
					{Object.values(TECH_SECTIONS).map(section => (
						<section key={section.title}>
							{/* Section Title */}
							<h2
								className='text-sm leading-none font-semibold tracking-wide
									uppercase mb-1 text-(--color-section-label)'
							>
								{section.title}
							</h2>

							{/* Section Description */}
							<p
								className='text-[0.98rem] sm:text-[1.05rem] leading-relaxed
									text-text-soft mb-6 max-w-prose'
							>
								{section.description}
							</p>

							{/* Logo Grid */}
							<ul className='grid grid-cols-2 gap-6 sm:grid-cols-4'>
								{section.items.map(({ name, logoUrl }) => (
									<li
										key={name}
										className='flex flex-col items-center gap-2 rounded-lg
											bg-(--surface-subtle) border border-outline p-2'
									>
										<img
											src={logoUrl}
											alt={name}
											className='h-11 w-11 rounded-md p-2 bg-white/90
												dark:bg-white/10 border border-outline/60 shadow-sm'
										/>

										<span
											className='mt-1 text-[0.85rem] font-normal
												text-foreground-muted/80 dark:text-foreground-muted/70
												text-center tracking-wide leading-tight'
										>
											{name}
										</span>
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</div>

			{/* CTA */}
			<div
				className='w-full max-w-360 mx-auto mb-24 px-8
					container-type-inline-size'
			>
				<div
					className='bg-(--surface-subtle) py-20 grid grid-cols-12 rounded-md'
				>
					<div
						className='col-span-12 md:col-span-8 md:col-start-3 flex flex-col
							px-4 md:px-0'
					>
						<h2
							className='text-center font-medium text-(--color-foreground)
								text-[clamp(1.75rem,calc(1.75rem+1.2vw),2.75rem)]
								leading-[clamp(2.1rem,calc(2.1rem+1.5vw),3.2rem)]
								tracking-[clamp(-0.03em,calc(-0.03em+0.015em*((90rem-100vw)/66.5625)),
								-0.012em)]'
						>
							You learn best by building. Let's begin.
						</h2>

						<div className='flex items-center justify-center pt-8'>
							<Link
								to='/learn/build-for-the-web'
								className='inline-flex items-center justify-center transition
									duration-150 ease-in-out rounded-[2.5rem] text-nowrap h-11
									min-h-11 px-4 gap-[0.3em] text-[1.0625rem] leading-7
									font-normal tracking-[-0.01em] bg-(--surface-subtle)
									text-(--text-strong) hover:bg-(--surface-subtle-hover)
									disabled:bg-(--surface-subtle) disabled:text-(--text-weak)
									focus:outline-1 focus:outline-(--surface-subtle-hover)
									outline-offset-2 no-underline hover:no-underline'
							>
								Start building
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
