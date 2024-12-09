"use client";

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interaction from '@fullcalendar/interaction'

import { useRef } from "react";
import { NavBar } from "@components/NavBar";
import { Hero } from "@components/Hero";
import { ContactProps, OffsetTopHandle } from "@components/Contact";
import dynamic from "next/dynamic";

const Contact = dynamic(() =>
  import("@components/Contact").then((module) => module.Contact),
);

const Features = dynamic(() =>
  import("@components/Features").then((module) => module.Features),
);

const WrappedContact = ({ forwardedRef }: ContactProps) => (
  <Contact forwardedRef={forwardedRef} />
);

export default function Home() {
  const footerRef = useRef<OffsetTopHandle>(null);

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
      <WrappedContact forwardedRef={footerRef} />
    </>
  );
}
