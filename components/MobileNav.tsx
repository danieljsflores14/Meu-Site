'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type MobileNavProps = {
  links: ReadonlyArray<{ href: string; label: string }>
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <div className="mobile-nav" data-open={isOpen}>
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav__trigger"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {isOpen && (
        <div id="mobile-navigation-panel" className="mobile-nav__panel">
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
