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
				className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
					isSidebarOpen
						? 'border-blue-700 bg-blue-100'
						: 'border-blue-300 bg-white group-hover:border-blue-400 group-hover:bg-blue-50'
				} `}
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
