import {
  isRouteErrorResponse,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'
import './app.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="h-16 bg-blue-600 text-white flex items-center justify-center px-6">
        <h1 className="text-lg font-semibold">
          Build a Fullstack UI with TypeScript, React, Tailwind CSS &
          React Router v7
        </h1>
      </header>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 bg-slate-50 text-gray-700 border-r border-gray-200 px-5 py-6 h-full overflow-y-auto">
          <nav className="space-y-3">
            {/* Sidebar Heading as NavLink */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block mb-4 font-bold uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'text-blue-700 text-lg'
                    : 'text-gray-800 text-base hover:text-blue-600'
                }`
              }
            >
              Exercises
            </NavLink>

            {/* Sidebar Links */}
            <NavLink
              to="/what-is-javascript"
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
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="h-16 bg-blue-50 text-blue-700 flex items-center justify-center">
        <span className="text-sm">
          &copy; 2025 OlumCodeCamp All rights reserved.
        </span>
      </footer>
      <Scripts />
      <ScrollRestoration />
    </div>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
