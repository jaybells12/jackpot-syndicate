'use client'

import { Box, Container, Heading } from '@chakra-ui/react'
import backgroundImg from '@public/service_background_youtube-studio.webp'
import card01 from '@public/homepage_youtube-studio.webp' //Temporary until Jon gives me youtube cards
// import { Image } from '@chakra-ui/next-js'
import { TempImage } from '@components/TempImage'
import { ServiceCard } from '@components/ServiceCard'
import { HEADER_HEIGHT } from '@components/NavBar'

const TITLE = 'Youtube Studio'

const DESCRIPTION =
  'Our TurnKey Youtube Studio is perfect for Talking Head Backdrop Style videos. Recording your video here in High Quality 4k Beautiful Quality Starting at $75/Hour. Just Bring your SD Card.'

const GEAR =
  'A7sIII Camera\nLarge Viewing Monitor\nButterfly and Clam Lighting\nWide Array of Backgrounds and Green Screen'

const ALT = 'Woman opening a box'

export default function ServicePage() {
  return (
    <Container
      as={'section'}
      minHeight={'100svh'}
      position={'relative'}
    >
      <TempImage
        priority
        // Position absolute allows 'Box' sibling to position itself relative to the header
        position={'absolute'}
        top={'0'}
        src={backgroundImg}
        alt={'recording studio'}
        opacity={'20%'}
        sx={{ objectFit: 'cover' }}
        minHeight={['50svh', '60svh', '70svh']}
      />
      <Box paddingTop={HEADER_HEIGHT + 25}>
        <Heading
          as={'h1'}
          variant={'service'}
        >
          {TITLE}
        </Heading>
        <ServiceCard
          cardImg={card01}
          altText={ALT}
          titleLeft={'Description'}
          textLeft={DESCRIPTION}
          titleRight={'Gear'}
          textRight={GEAR}
        />
      </Box>
    </Container>
  )
}
