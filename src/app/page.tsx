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
      <NavBar footerRef={footerRef} />
      <main>
        <Hero />
        <Features />
      </main>
      <Contact ref={footerRef} />
    </>
  )
}

