import {
  Container,
  ContainerProps,
  AspectRatioProps,
  AspectRatio,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import { hero } from 'src/data/staticData'

export const Hero = (props: ContainerProps & AspectRatioProps) => {
  return (
    <Container
      as={'section'}
      width={'full'}
      maxWidth={'unset'}
      backgroundColor={'black'}
      position={'relative'}
    >
      <AspectRatio
        ratio={16.27 / 9}
        marginTop={['100px', null, null, null, '0']}
        width={['300%', null, '150%', null, '100%']}
        // height={['300%', null, '150%', null, '100%']}
      >
        <iframe
          src={
            'https://player.vimeo.com/video/813019070?h=64f8db3e7b&title=0&portrait=0&muted=1&autopause=0&loop=1&background=1&app_id=122963'
          }
          referrerPolicy={'no-referrer'}
          style={{ opacity: 0.75, pointerEvents: 'none' }}
        />
      </AspectRatio>
      <Box
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        width={['80%', null, '60%', 'unset']}
      >
        <Heading
          as={'h1'}
          variant={'hero'}
        >
          {hero.title}
        </Heading>
        <Text variant={'hero'}>{hero.text}</Text>
      </Box>
    </Container>
  )
}
