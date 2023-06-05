"use client";

import { Container, Heading } from "@chakra-ui/react";
import backgroundImg from "@public/services/service_recording-studio.webp";
import card01 from "@public/services/service_recording-studio_card-01.webp";
import { Image } from "@chakra-ui/next-js";
import { ServiceCard } from "@components/ServiceCard";

const TITLE = "Recording Studio & ISO Booth";

const DESCRIPTION =
  "Use our 8 Channel Recording Studio to record drums, Track vocals in the ISO booth, Isolate Guitar and Track bass. We have almost eveyr plugin You’d ever want and need from Waves, Kontact Komplete, Sound Toys Fab Filter,  Omnisphere, and so much more. We have a ton of outboard, instruments and high class microphones to choose from as well.";

const GEAR =
  "Apollo 8P I/O\nProTools/Ableton/Logic\n2x Townsend L22 Sphere Mics\nFender Rhodes 73...\nPlease see our Gear List for an exhaustive list of toys.";

const ALT = "Computer desk";

export default function ServicePage() {
  return (
    <Container
      as={"section"}
      minHeight={"100svh"}
      position={"relative"}
    >
      <Heading
        as={"h1"}
        variant={"service"}
      >
        {TITLE}
      </Heading>
      <Image
        src={backgroundImg}
        alt={"recording studio"}
        opacity={"20%"}
      />
      <ServiceCard
        cardImg={card01}
        altText={ALT}
        titleLeft={"Description"}
        textLeft={DESCRIPTION}
        titleRight={"Gear"}
        textRight={GEAR}
      />
    </Container>
  );
}
