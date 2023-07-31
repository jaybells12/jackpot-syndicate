'use client'

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interaction from '@fullcalendar/interaction'

import { useRef } from 'react'
import { NavBar } from '@components/NavBar'
import { Hero } from '@components/Hero'
import { Features } from '@components/Features'
import { Contact, OffsetTopHandle } from '@components/Contact'

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

