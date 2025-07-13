import { NavLink, Outlet } from 'react-router'

export default function ExampleHome() {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-slate-50 text-gray-700 border-r border-gray-200 px-5 py-6 h-full overflow-y-auto">
        <nav className="space-y-3">
          {/* Sidebar Heading as NavLink */}
          <div className="mb-4 font-bold uppercase tracking-wide text-gray-600 text-sm">
            Exercises
          </div>

          {/* Sidebar Links */}
          <NavLink
            to="/exercises/what-is-javascript"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? 'text-white bg-blue-600'
                  : 'text-blue-600 hover:bg-blue-50'
              }`
            }
          >
            What is JavaScript?
          </NavLink>

          {/* Add more NavLinks here if needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10 max-w-screen-lg mx-auto">
        <Outlet />
      </main>
    </>
  )
}
