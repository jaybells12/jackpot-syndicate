'use client'

import { Box, Container, Heading } from '@chakra-ui/react'
import backgroundImg from '@public/service_background_youtube-studio.webp'
import card01 from '@public/homepage_youtube-studio.webp' //Temporary until Jon gives me youtube cards
// import { Image } from '@chakra-ui/next-js'
import { TempImage } from '@components/TempImage'
import { ServiceCard } from '@components/ServiceCard'

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
      minHeight={'100vh'}
      position={'relative'}
    >
      <TempImage
        priority
        src={backgroundImg}
        alt={'recording studio'}
        opacity={'20%'}
        sx={{ objectFit: 'cover' }}
        minHeight={['40svh', '50svh', '60svh', '70svh']}
      />
      <Box
        marginTop={['-220px', '-268px', '-355px', '-445px', '-445px', '-450px']}
      >
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
