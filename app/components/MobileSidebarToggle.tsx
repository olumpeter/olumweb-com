import { Menu, X } from 'lucide-react'

import { useSidebar } from '~/context/SidebarContext'

export function MobileSidebarToggle() {
	const { isSidebarOpen, setIsSidebarOpen } = useSidebar()

	return (
		<button
			onClick={() => setIsSidebarOpen(prev => !prev)}
			aria-label='Toggle Sidebar'
			className='group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-300'
		>
			<span
				className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all
          ${
						isSidebarOpen
							? 'bg-blue-100 border-blue-700'
							: 'bg-white border-blue-300 group-hover:bg-blue-50 group-hover:border-blue-400'
					}
        `}
			>
				{isSidebarOpen ? (
					<X size={20} className='text-blue-700' />
				) : (
					<Menu size={20} className='text-blue-700 group-hover:text-blue-900' />
				)}
			</span>
			<span>All exercises</span>
		</button>
	)
}
