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
					<h1 className='text-2xl leading-tight font-semibold tracking-tight text-(--color-foreground) sm:text-3xl lg:text-4xl'>
						Build and ship full-stack web apps the modern way
					</h1>

					<p className='mt-5 max-w-[65ch] text-[clamp(1rem,0.9rem+0.4vw,1.15rem)] leading-[1.65] text-(--color-hero-subtitle)'>
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
							<h2 className='mb-1 text-sm leading-none font-semibold tracking-wide text-(--color-section-label) uppercase'>
								{section.title}
							</h2>

							{/* Section Description */}
							<p className='text-text-soft mb-6 max-w-prose text-[0.98rem] leading-relaxed sm:text-[1.05rem]'>
								{section.description}
							</p>

							{/* Logo Grid */}
							<ul className='grid grid-cols-2 gap-6 sm:grid-cols-4'>
								{section.items.map(({ name, logoUrl }) => (
									<li
										key={name}
										className='border-outline flex flex-col items-center gap-2 rounded-lg border bg-(--surface-subtle) p-2'
									>
										<img
											src={logoUrl}
											alt={name}
											className='border-outline/60 h-11 w-11 rounded-md border bg-white/90 p-2 shadow-sm dark:bg-white/10'
										/>

										<span className='text-foreground-muted/80 dark:text-foreground-muted/70 mt-1 text-center text-[0.85rem] leading-tight font-normal tracking-wide'>
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
			<div className='container-type-inline-size mx-auto mb-24 w-full max-w-360 px-8'>
				<div className='grid grid-cols-12 rounded-md bg-(--surface-subtle) py-20'>
					<div className='col-span-12 flex flex-col px-4 md:col-span-8 md:col-start-3 md:px-0'>
						<h2 className='tracking-[clamp(-0.03em,calc(-0.03em+0.015em*((90rem-100vw)/66.5625)), -0.012em)] text-center text-[clamp(1.75rem,calc(1.75rem+1.2vw),2.75rem)] leading-[clamp(2.1rem,calc(2.1rem+1.5vw),3.2rem)] font-medium text-(--color-foreground)'>
							You learn best by building. Let's begin.
						</h2>

						<div className='flex items-center justify-center pt-8'>
							<Link
								to='/learn/build-for-the-web'
								className='inline-flex h-11 min-h-11 items-center justify-center gap-[0.3em] rounded-[2.5rem] bg-(--surface-subtle) px-4 text-[1.0625rem] leading-7 font-normal tracking-[-0.01em] text-nowrap text-(--text-strong) no-underline outline-offset-2 transition duration-150 ease-in-out hover:bg-(--surface-subtle-hover) hover:no-underline focus:outline-1 focus:outline-(--surface-subtle-hover) disabled:bg-(--surface-subtle) disabled:text-(--text-weak)'
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
