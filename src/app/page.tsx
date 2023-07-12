'use client'

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interaction from '@fullcalendar/interaction'
// import { features } from 'src/data/staticData'
// import { Link } from '@chakra-ui/next-js'
// import { FeaturesItem } from '@components/FeaturesItem'
// import { Button, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { NavBar } from '@components/NavBar'
import { Hero } from '@components/Hero'
import { Features } from '@components/Features'
import { Contact, OffsetTopHandle } from '@components/Contact'
import { MutableRefObject } from 'react'

export default function Home() {
  const footerRef = useRef<OffsetTopHandle>(null)
  return (
    <>
      <header>
        <NavBar footerRef={footerRef} />
      </header>
      <main>
        <Hero />
        <Features />
      </main>
      <Contact ref={footerRef} />
    </>
  )
}

