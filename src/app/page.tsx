"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import { features } from "src/data/staticData";
import { NavBar } from "@components/NavBar";
import { Hero } from "@components/Hero";
import { Link } from "@chakra-ui/next-js";
import { FeaturesItem } from "@components/FeaturesItem";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Features } from "@components/Features";
import { Contact } from "@components/Contact";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Features />
      </main>
      <Contact />
    </>
  );
}

