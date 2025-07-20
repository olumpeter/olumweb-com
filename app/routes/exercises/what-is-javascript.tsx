import { useEffect, useRef, useState } from 'react'

import { MobileSidebarToggle } from '~/components/MobileSidebarToggle'
import { OnThisPageDropdown } from '~/components/OnThisPageDropdown'
import { useScrollHeader } from '~/context/ScrollContext'

const MAX_DISPLAY_MESSAGES = 10
const MAX_MESSAGES = 20

export default function WhatIsJavaScript() {
	const [player1Name, setPlayer1Name] = useState<string | null>(null)
	const [example2ParagraphTextContents, setExample2ParagraphTextContents] =
		useState<Array<string>>([])
	const bottomRef = useRef<HTMLDivElement | null>(null)
	const userHasClickedExample2Button = useRef(false)
	const isScrolledPastHeader = useScrollHeader()

	function handleExample1ButtonClick() {
		const newName = prompt('Enter a new name')?.trim()
		if (newName) {
			setPlayer1Name(newName)
		}
	}

	function handleExample2ButtonClick() {
		userHasClickedExample2Button.current = true
		const timestamp = new Date().toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})
		setExample2ParagraphTextContents(prev => [
			...prev,
			`You clicked the button (${prev.length + 1}) at ${timestamp}`,
		])
	}

	function handleResetExample2ButtonClick() {
		setExample2ParagraphTextContents([])
	}

	useEffect(() => {
		if (!userHasClickedExample2Button.current) return
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [example2ParagraphTextContents.length])

	return (
		<>
			{/* Only show in mobile */}
			<div
				className={`fixed left-0 z-30 flex h-12 w-screen items-center justify-between border-b bg-white px-4 py-3 md:hidden ${
					isScrolledPastHeader ? 'top-0 shadow-sm' : 'top-[64px]'
				}`}
			>
				<MobileSidebarToggle />
				<OnThisPageDropdown
					items={[
						{ href: '#example-1-heading', label: 'Example 1' },
						{ href: '#example-2-heading', label: 'Example 2' },
					]}
				/>
			</div>

			<div className='mx-auto max-w-2xl px-4 py-8 text-gray-800'>
				<h1 className='mb-6 text-3xl font-bold text-blue-700'>
					What is JavaScript?
				</h1>

				<section
					aria-labelledby='example-1-heading'
					className='rounded-lg border border-gray-200 bg-white p-6 shadow'
				>
					<h2
						id='example-1-heading'
						className='mb-2 text-xl font-semibold text-gray-900'
					>
						Example 1
					</h2>
					<p className='mb-4 text-gray-600'>
						Try clicking on the text label on this button to see what happens.
					</p>
					<button
						className='rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700'
						onClick={handleExample1ButtonClick}
					>
						Player 1: {player1Name ?? 'Anonymous'}
					</button>
				</section>

				<section
					aria-labelledby='example-2-heading'
					className='mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow'
				>
					<h2
						id='example-2-heading'
						className='mb-2 text-xl font-semibold text-gray-900'
					>
						Example 2
					</h2>

					<div className='mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
						<button
							className='rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500'
							onClick={handleExample2ButtonClick}
							disabled={example2ParagraphTextContents.length >= MAX_MESSAGES}
						>
							Click to Add a Message
						</button>

						<span
							aria-label={`There are ${example2ParagraphTextContents.length} messages`}
							className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-800'
						>
							{example2ParagraphTextContents.length}
						</span>

						{example2ParagraphTextContents.length > 0 && (
							<button
								className='rounded bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700'
								onClick={handleResetExample2ButtonClick}
							>
								Reset Messages
							</button>
						)}
					</div>

					<div className='mb-6 space-y-4' aria-live='polite' role='log'>
						{example2ParagraphTextContents
							.slice(-MAX_DISPLAY_MESSAGES + 1)
							.map((textContent, index) => (
								<p key={index} className='text-gray-600'>
									{textContent}
								</p>
							))}
					</div>

					<div ref={bottomRef} />
				</section>
			</div>
		</>
	)
}
