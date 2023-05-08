"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import { features } from "src/data/staticData";
import { NavBar } from "@components/NavBar";
import { Hero } from "@components/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Features /> */}
    </>
  );
}
