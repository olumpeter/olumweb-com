import { ChevronDown, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router'

import { MobileSidebarToggle } from '~/components/MobileSidebarToggle'
import { ScrollHeaderContext } from '~/context/ScrollContext'
import { useSidebar } from '~/context/SidebarContext'

const sidebarNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block px-3 py-2 rounded-md text-sm font-medium transition',
    isActive
      ? 'text-blue-700 font-semibold bg-blue-100'
      : 'text-blue-600 hover:bg-blue-50',
  ].join(' ')

export default function Exercises() {
  const [isScrolledPastHeader, setIsScrolledPastHeader] =
    useState(false)
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar()

  const [openSections, setOpenSections] = useState<
    Record<string, boolean>
  >({
    javascriptExercises: true,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleScroll() {
      setIsScrolledPastHeader(window.scrollY >= 64)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount in browser

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleSection(section: string) {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <ScrollHeaderContext.Provider value={isScrolledPastHeader}>
      <div className="relative w-full">
        {/* Mobile Top Bar */}
        <div
          className={`md:hidden fixed left-0 z-30 w-screen h-12 bg-white border-b px-4 py-3 flex items-center justify-between ${
            isScrolledPastHeader ? 'top-0 shadow-sm' : 'top-[64px]'
          }`}
        >
          <MobileSidebarToggle />
        </div>

        {/* Backdrop Blur Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed md:static z-20 left-0 w-64 shrink-0
            h-[calc(100vh-112px)] md:h-auto
            bg-slate-50 border-r border-gray-200 overflow-y-auto px-5 py-6
            transition-transform duration-300 ease-in-out transform
            ${
              isSidebarOpen
                ? isScrolledPastHeader
                  ? 'top-[48px]'
                  : 'top-[112px]'
                : '-translate-x-full'
            }
            ${isSidebarOpen ? 'translate-x-0' : ''} 
            md:translate-x-0 md:block`}
        >
          <nav className="space-y-3">
            <div>
              <button
                onClick={() => toggleSection('javascriptExercises')}
                className="flex items-center justify-between w-full font-semibold text-gray-600 mb-1"
              >
                <span>JavaScript Exercises</span>
                {openSections.javascriptExercises ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {openSections.javascriptExercises && (
                <ul className="space-y-3">
                  <li>
                    <NavLink
                      to="/exercises/what-is-javascript"
                      className={sidebarNavLinkClass}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      What is JavaScript?
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`relative flex-1 transition-all duration-300 ease-in-out px-4 
            sm:px-6 lg:px-8 py-10 max-w-screen-lg mx-auto pt-16 md:pt-0 ${
              isSidebarOpen ? 'md:ml-0 ml-64' : ''
            }`}
        >
          <Outlet />
        </main>
      </div>
    </ScrollHeaderContext.Provider>
  )
}
