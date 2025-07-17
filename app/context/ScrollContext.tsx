import { createContext, useContext } from 'react'

export const ScrollHeaderContext = createContext(false)

export function useScrollHeader() {
  return useContext(ScrollHeaderContext)
}
