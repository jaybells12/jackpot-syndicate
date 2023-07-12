'use client'

import { Contact, OffsetTopHandle } from '@components/Contact'
import { NavBar } from '@components/NavBar'
import { useRef } from 'react'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerRef = useRef<OffsetTopHandle>(null)
  return (
    <>
      <header>
        <NavBar footerRef={footerRef} />
      </header>
      <main>{children}</main>
      <Contact ref={footerRef} />
    </>
  )
}
