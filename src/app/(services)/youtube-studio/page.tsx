"use client";

import { Container, Heading } from "@chakra-ui/react";
import backgroundImg from "@public/services/service_recording-studio.webp";
import card01 from "@public/services/service_youtube-studio_card-01.webp";
import { Image } from "@chakra-ui/next-js";
import { ServiceCard } from "@components/ServiceCard";

const description =
  "Our TurnKey Youtube Studio is perfect for Talking Head Backdrop Style videos. Recording your video here in High Quality 4k Beautiful Quality Starting at $75/Hour. Just Bring your SD Card.";

const gear =
  "A7sIII Camera\nLarge Viewing Monitor\nButterfly and Clam Lighting\nWide Array of Backgrounds and Green Screen";

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
        Recording Studio
      </Heading>
      <Image
        src={backgroundImg}
        alt={"recording studio"}
        opacity={"20%"}
      />
      <ServiceCard
        cardImg={card01}
        altText={"Woman opening a box"}
        titleLeft={"Description"}
        textLeft={description}
        titleRight={"Gear"}
        textRight={gear}
      />
    </Container>
  );
}
