import { Link } from 'react-router'

import reactLogoAssetUrl from '~/assets/react_logo.svg'
import rrv7LogoLightAssetUrl from '~/assets/rrv7_logo_light.svg?url'
import tailwindCSSLogoAssetUrl from '~/assets/tailwind_css_logo.svg?url'
import tsLogo512 from '~/assets/ts_logo_512.svg?url'

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
				<li className='flex items-start gap-3'>
					<img
						src={tsLogo512}
						alt='TypeScript Logo'
						className='w-6 h-6 mt-1 rounded shadow'
					/>
					<span>
						<strong>TypeScript</strong> for confidence and scalability
					</span>
				</li>
				<li className='flex items-start gap-3'>
					<img
						src={reactLogoAssetUrl}
						alt='React Logo'
						className='w-6 h-6 mt-1 rounded shadow'
					/>
					<span>
						<strong>React</strong> for component-driven UIs
					</span>
				</li>
				<li className='flex items-start gap-3'>
					<img
						src={tailwindCSSLogoAssetUrl}
						alt='Tailwind CSS Logo'
						className='w-6 h-6 mt-1 rounded shadow'
					/>
					<span>
						<strong>Tailwind CSS</strong> for rapid styling
					</span>
				</li>
				<li className='flex items-start gap-3'>
					<img
						src={rrv7LogoLightAssetUrl}
						alt='React Router v7 Logo'
						className='w-6 h-6 mt-1 rounded shadow'
					/>
					<span>
						<strong>React Router v7</strong> (Framework Mode) for modern routing
						with data loading and mutations
					</span>
				</li>
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
