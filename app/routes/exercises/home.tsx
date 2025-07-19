import { BookOpenCheck } from 'lucide-react'

import { useMediaQuery } from '~/utils/useMediaQuery'

export default function ExercisesHome() {
  const isMobile = useMediaQuery('(max-width: 767px)') // Tailwind `md` breakpoint

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-6 rounded-full bg-blue-100 p-4 animate-bounce">
        <BookOpenCheck className="h-8 w-8 text-blue-700" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Ready to learn JavaScript?
      </h2>

      <p className="text-sm text-gray-600 max-w-xs">
        {isMobile ? (
          <>
            Click the{' '}
            <strong className="font-semibold text-gray-800">
              All exercises
            </strong>{' '}
            menu above to select your first exercise.
          </>
        ) : (
          <>
            Select an exercise from the{' '}
            <strong className="font-semibold text-gray-800">
              sidebar
            </strong>{' '}
            to get started.
          </>
        )}
      </p>
    </div>
  )
}
