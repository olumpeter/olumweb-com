import { useEffect, useState } from 'react'

export function useLocalStorageBoolean(key: string, defaultValue: boolean) {
	const [value, setValue] = useState(defaultValue)

	useEffect(() => {
		const storedValue = window.localStorage.getItem(key)
		if (storedValue !== null) {
			setValue(storedValue === 'true')
		}
	}, [key])

	useEffect(() => {
		window.localStorage.setItem(key, String(value))
	}, [key, value])

	return [value, setValue] as const
}
