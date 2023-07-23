'use client'

import { Box, Container, Heading } from '@chakra-ui/react'
import backgroundImg from '@public/service_background_recording-studio.webp'
import card01 from '@public/card_recording-studio-01.webp'
import card02 from '@public/card_recording-studio-02.webp'
import card03 from '@public/card_recording-studio-03.webp'
// import { Image } from '@chakra-ui/next-js'
import { TempImage } from '@components/TempImage'
import { ServiceCard } from '@components/ServiceCard'
import { HEADER_HEIGHT } from '@components/NavBar'

const TITLE = 'Recording Studio & ISO Booth'

const DESCRIPTION =
  'Use our 8 Channel Recording Studio to record drums, Track vocals in the ISO booth, Isolate Guitar and Track bass. We have almost eveyr plugin You’d ever want and need from Waves, Kontact Komplete, Sound Toys Fab Filter,  Omnisphere, and so much more. We have a ton of outboard, instruments and high class microphones to choose from as well.'

const GEAR =
  'Apollo 8P I/O\nProTools/Ableton/Logic\n2x Townsend L22 Sphere Mics\nFender Rhodes 73...\nPlease see our Gear List for an exhaustive list of toys.'

const ALT = 'Computer desk'

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
        // @ts-ignore Chakra-Ui accepts array for responsive sizing
        height={[300, 350, 450, 550, 575]}
      />
      <Box paddingTop={['5rem', null, '6rem', null, '7rem']}>
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
