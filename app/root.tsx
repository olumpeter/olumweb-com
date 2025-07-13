import {
  isRouteErrorResponse,
  Link,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'

import './app.css'
import faviconAssetUrl from '~/assets/favicon.svg?url'
import logoAssetUrl from '~/assets/logo.png?url'

export function links() {
  return [
    { rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
  ]
}

export function Document({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <head>
        <title>Awesome Web Dev Exercises</title>
        <meta
          name="description"
          content="Learn how to Build a Fullstack UI with TypeScript, React, Tailwind CSS & React Router"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Links />
      </head>
      <body className="h-full font-sans">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="h-16 bg-blue-600 text-white flex items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold hover:underline"
        >
          <img
            src={logoAssetUrl}
            alt="Olum Web Dev Logo"
            className="w-10 h-10 bg-white rounded-full p-1 shadow-md"
          />
          <span>Olum Web Dev</span>
        </Link>
      </header>

      <main className="flex flex-1 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="h-16 bg-blue-50 text-blue-700 flex items-center justify-center text-sm">
        &copy; 2025 Olum Web Dev. All rights reserved.
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const title = isRouteErrorResponse(error)
    ? error.status === 404
      ? '404: Not Found'
      : `${error.status} ${error.statusText}`
    : 'Something went wrong'

  const description = isRouteErrorResponse(error)
    ? error.status === 404
      ? 'The page you’re looking for does not exist.'
      : error.statusText
    : error instanceof Error
    ? error.message
    : 'Unknown error'

  return (
    <Document>
      <Layout>
        <div className="flex flex-1 items-center justify-center px-6 py-16 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Go Home
            </Link>

            {error instanceof Error && (
              <pre className="mt-8 text-left text-sm text-red-700 bg-red-50 border border-red-200 rounded p-4 overflow-x-auto">
                <code>{error.stack}</code>
              </pre>
            )}
          </div>
        </div>
      </Layout>
    </Document>
  )
}
