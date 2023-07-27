'use client'

import { Box, Container, Heading } from '@chakra-ui/react'
import backgroundImg from '@public/service_background_podcast.webp'
import card01 from '@public/card_podcast-01.webp'
import card02 from '@public/card_podcast-02.webp'
// import { Image } from '@chakra-ui/next-js'
import { TempImage } from '@components/TempImage'
import { ServiceCard } from '@components/ServiceCard'

const TITLE = 'Podcast Room'

const DESCRIPTION =
  'Use our White Wall Room dressed with plants and furniture, or let us know a few weeks in advance and we can design a set for you, exclusively. Top End Audio Gear and Mixer Included. Live switcher for Live Broadcast upon request.'

const GEAR =
  '11”x11’\n4 Shure Sm7b\n4 WA Pre’s\n4 A7sII Cameras\nMini ATEM Pro ISO (switcher)\nRodeCaster 4 Channel A/D'

const ALT = 'Podcast Room'

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
          images={[card01, card02]}
          // cardImg={card01}
          // altText={ALT}
          titleLeft={'Description'}
          textLeft={DESCRIPTION}
          titleRight={'Size/Gear'}
          textRight={GEAR}
        />
      </Box>
    </Container>
  )
}
