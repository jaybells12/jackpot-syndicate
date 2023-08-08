'use client'

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interaction from '@fullcalendar/interaction'

import { useRef } from 'react'
import { NavBar } from '@components/NavBar'
import { Hero } from '@components/Hero'
import { OffsetTopHandle } from '@components/Contact'
import dynamic from 'next/dynamic'

const Contact = dynamic(() =>
  import('@components/Contact').then((module) => module.Contact)
)

const Features = dynamic(() =>
  import('@components/Features').then((module) => module.Features)
)

export default function Home() {
  const footerRef = useRef<OffsetTopHandle>(null)

  return (
    <>
      {/* NavBar could be in layout */}
      <NavBar footerRef={footerRef} />
      {/* Main could be in layout */}
      <main>
        <Hero />
        <Features />
      </main>
      {/* Contact could be in layout */}
      <Contact ref={footerRef} />
    </>
  )
}

