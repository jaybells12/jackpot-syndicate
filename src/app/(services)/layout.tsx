'use client'

import { ContactProps, OffsetTopHandle } from '@components/Contact'
import { NavBar } from '@components/NavBar'
import dynamic from 'next/dynamic'
import { useRef } from 'react'

const Contact = dynamic(() =>
  import('@components/Contact').then((module) => module.Contact)
)

const WrappedContact = ({ forwardedRef }: ContactProps) => (
  <Contact forwardedRef={forwardedRef} />
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
      <WrappedContact forwardedRef={footerRef} />
    </>
  )
}
