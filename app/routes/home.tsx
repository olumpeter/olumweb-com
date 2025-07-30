import { Link } from 'react-router'

import eslintIcon from '~/assets/eslint-icon.svg?url'
import nodeJSLogoGreen from '~/assets/node-js-logo-green.svg?url'
import npmLogo from '~/assets/npm-logo-red.svg?url'
import prettierAvatarDark from '~/assets/prettier-avatar-dark.svg?url'
import reactLogoAssetUrl from '~/assets/react_logo.svg?url'
import rrv7LogoLightAssetUrl from '~/assets/rrv7_logo_light.svg?url'
import tailwindCSSLogoAssetUrl from '~/assets/tailwind_css_logo.svg?url'
import tsLogo512 from '~/assets/ts_logo_512.svg?url'
import vscodeLogo from '~/assets/vscode-logo.svg?url'

const tools = [
	{
		name: 'TypeScript',
		description: 'for confidence and scalability',
		logoUrl: tsLogo512,
	},
	{
		name: 'React',
		description: 'for component-driven UIs',
		logoUrl: reactLogoAssetUrl,
	},
	{
		name: 'Tailwind CSS',
		description: 'for rapid styling',
		logoUrl: tailwindCSSLogoAssetUrl,
	},
	{
		name: 'React Router (Framework Mode)',
		description: 'for modern routing with data loading and mutations',
		logoUrl: rrv7LogoLightAssetUrl,
	},
	{
		name: 'Node.js',
		description:
			'as the JavaScript runtime that powers tooling like package managers, dev servers, and build tools',
		logoUrl: nodeJSLogoGreen,
	},
	{
		name: 'NPM',
		description:
			'for installing dependencies, running scripts, and managing your JavaScript tooling',
		logoUrl: npmLogo,
	},
	{
		name: 'ESLint',
		description: 'to catch common bugs and enforce consistent code quality',
		logoUrl: eslintIcon,
	},
	{
		name: 'Prettier',
		description:
			'to automatically format your code so you can focus on logic, not styling',
		logoUrl: prettierAvatarDark,
	},
	{
		name: 'VS Code',
		description:
			'as the lightweight yet powerful code editor that supercharges your development workflow',
		logoUrl: vscodeLogo,
	},
]

export default function Home() {
	return (
		<div className='mx-auto max-w-3xl px-4 py-16 text-center text-gray-800'>
			<h1 className='mb-6 text-4xl leading-tight font-bold text-blue-700 sm:text-5xl'>
				🚀 Learn Web Development the Modern Way
			</h1>

			<p className='mb-6 text-lg text-gray-700'>
				This isn't just another tutorial. It’s a hands-on journey to building
				real projects with the exact tools used in professional teams:
			</p>

			<ul className='mb-8 space-y-4 text-left text-gray-600'>
				{tools.map(({ name, description, logoUrl }) => (
					<li
						key={name}
						className='flex items-start gap-3 rounded-md p-2 transition hover:bg-gray-100'
					>
						<img
							src={logoUrl}
							alt={`${name} Logo`}
							className='mt-1 h-6 w-6 rounded shadow'
						/>
						<div>
							<strong className='block font-semibold text-gray-800'>
								{name}
							</strong>
							<p className='text-sm text-gray-600'>{description}</p>
						</div>
					</li>
				))}
			</ul>

			<p className='mb-10 text-lg text-gray-700'>
				If you want to deeply understand how modern websites are built, this is
				the perfect place to start.
			</p>

			<div className='rounded-lg border border-gray-200 bg-gray-50 p-6 shadow'>
				<p className='mb-2 text-lg text-gray-700'>
					✅ Ready to get your hands dirty? Start with the first project:
				</p>
				<p className='mb-4 text-2xl'>👇</p>
				<Link
					to='/exercises'
					className='inline-block rounded bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700'
				>
					Start the Journey
				</Link>
			</div>
		</div>
	)
}
