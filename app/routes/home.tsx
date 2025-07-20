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
		<div className='max-w-3xl mx-auto px-4 py-16 text-center text-gray-800'>
			<h1 className='text-4xl sm:text-5xl font-bold leading-tight text-blue-700 mb-6'>
				🚀 Learn Web Development the Modern Way
			</h1>

			<p className='text-lg text-gray-700 mb-6'>
				This isn't just another tutorial. It’s a hands-on journey to building
				real projects with the exact tools used in professional teams:
			</p>

			<ul className='text-left text-gray-600 mb-8 list-disc list-inside space-y-2'>
				{tools.map(({ name, description, logoUrl }) => (
					<li key={name} className='flex items-start gap-3'>
						<img
							src={logoUrl}
							alt={`${name} Logo`}
							className='w-6 h-6 mt-1 rounded shadow'
						/>
						<span>
							<strong>{name}</strong> {description}
						</span>
					</li>
				))}
			</ul>

			<p className='text-lg text-gray-700 mb-10'>
				If you want to deeply understand how modern websites are built, this is
				the perfect place to start.
			</p>

			<div className='bg-gray-50 border border-gray-200 rounded-lg shadow p-6'>
				<p className='text-base text-gray-700 mb-2'>
					✅ Ready to get your hands dirty? Start with the first project:
				</p>
				<p className='text-2xl mb-4'>👇</p>
				<Link
					to='/exercises'
					className='inline-block px-6 py-3 text-white font-medium rounded bg-blue-600 hover:bg-blue-700 transition'
				>
					Start the Journey
				</Link>
			</div>
		</div>
	)
}
