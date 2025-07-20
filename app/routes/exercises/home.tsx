import { BookOpenCheck } from 'lucide-react'

import { useMediaQuery } from '~/utils/useMediaQuery'

export default function ExercisesHome() {
	const isMobile = useMediaQuery('(max-width: 767px)') // Tailwind `md` breakpoint

	return (
		<div className='flex flex-col items-center justify-center px-4 py-12 text-center'>
			<div className='mb-6 animate-bounce rounded-full bg-blue-100 p-4'>
				<BookOpenCheck className='h-8 w-8 text-blue-700' />
			</div>

			<h2 className='mb-2 text-lg font-semibold text-gray-800'>
				Ready to learn JavaScript?
			</h2>

			<p className='max-w-xs text-sm text-gray-600'>
				{isMobile ? (
					<>
						Click the{' '}
						<strong className='font-semibold text-gray-800'>
							All exercises
						</strong>{' '}
						menu above to select your first exercise.
					</>
				) : (
					<>
						Select an exercise from the{' '}
						<strong className='font-semibold text-gray-800'>sidebar</strong> to
						get started.
					</>
				)}
			</p>
		</div>
	)
}
