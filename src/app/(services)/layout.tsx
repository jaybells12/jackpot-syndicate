'use client'

import { OffsetTopHandle } from '@components/Contact'
import { NavBar } from '@components/NavBar'
import dynamic from 'next/dynamic'
import { useRef } from 'react'

const Contact = dynamic(() =>
  import('@components/Contact').then((module) => module.Contact)
)

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerRef = useRef<OffsetTopHandle>(null)

  return (
    <>
      <NavBar footerRef={footerRef} />
      <main>{children}</main>
      <Contact ref={footerRef} />
    </>
  )
}
