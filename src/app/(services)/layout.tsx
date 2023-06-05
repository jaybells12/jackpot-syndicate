"use client";

import { Contact } from "@components/Contact";
import { NavBar } from "@components/NavBar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Can probably remove margin after pages are built
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
