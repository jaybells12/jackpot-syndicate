'use client'

import {
  Box,
  Container,
  Heading,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react'
import backgroundImg from '@public/service_background_live-stage.webp'
import card01 from '@public/card_live-stage-01.webp'
import card02 from '@public/card_live-stage-02.webp'
import card03 from '@public/card_live-stage-03.webp'
// import { Image } from '@chakra-ui/next-js'
import { TempImage } from '@components/TempImage'
import { ServiceCard } from '@components/ServiceCard'

const TITLE = 'Sound Stage'

const DESCRIPTION =
  'Used for Interviews, table tops, still shoots, small audience sets, Audio Recording, Music videos, or Live broadcast and Recordings. A black theatrical curtain covers of the entire area perfect for sound deadening and black out. The lighting Grid spans across the entire area and into the kitchen. Yes, the ktichen is fully equipped. Sink Included.'

const GEAR = 'Sound Stage: 35’x24’'

const ALT = 'Sound stage'

export default function ServicePage() {
  return (
    <Container
      as={'section'}
      minHeight={'100svh'}
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
          titleRight={'Size'}
          textRight={GEAR}
        />
      </Box>
    </Container>
  )
}
