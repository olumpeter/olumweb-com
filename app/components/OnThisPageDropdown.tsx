import { ChevronDown, ChevronUp } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  items: { href: string; label: string }[]
}

export function OnThisPageDropdown({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownTop, setDropdownTop] = useState(64)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Update dropdown position
  function updateDropdownTop() {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownTop(window.scrollY + rect.bottom + 8)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (isOpen) {
      updateDropdownTop()
      window.addEventListener('scroll', updateDropdownTop)
      window.addEventListener('resize', updateDropdownTop)
    }
    return () => {
      window.removeEventListener('scroll', updateDropdownTop)
      window.removeEventListener('resize', updateDropdownTop)
    }
  }, [isOpen])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm font-semibold text-blue-700"
        aria-expanded={isOpen}
      >
        On this page
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            className="absolute z-50 mx-4 w-[calc(100vw-2rem)] max-w-full overflow-x-hidden overflow-y-scroll rounded-md shadow-lg bg-white border border-gray-200 py-2 text-sm"
            style={{
              position: 'absolute',
              top: dropdownTop,
            }}
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>,
          document.body
        )}
    </>
  )
}
