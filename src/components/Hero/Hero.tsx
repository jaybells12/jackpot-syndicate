import {
  Container,
  ContainerProps,
  AspectRatioProps,
  AspectRatio,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import { IframeFacade } from '@components/IframeLoader'
import { TempImage } from '@components/TempImage'
import { hero } from 'src/data/staticData'
import heroImage from '@public/video-facade.webp'

export const Hero = (props: ContainerProps & AspectRatioProps) => {
  return (
    <Container
      as={'section'}
      width={'full'}
      maxWidth={'unset'}
      backgroundColor={'background.dark'}
      position={'relative'}
      overflow={'hidden'}
    >
      <AspectRatio
        ratio={16 / 9}
        width={['300%', null, '150%', null, '100%']}
        marginLeft={['-4px', null, '-3px', null, '0']}
      >
        <IframeFacade
          Facade={() => (
            <TempImage
              priority
              placeholder={'blur'}
              src={heroImage}
              alt={'Hero image'}
              width={heroImage.width}
              height={heroImage.height}
              // Helps to keep the images aligned
              marginTop={'0.45%'}
            />
          )}
          src={'https://player.vimeo.com/video/813019070?background=1'}
          title={'hero video'}
          referrerPolicy={'no-referrer'}
          style={{
            pointerEvents: 'none',
            zIndex: '2',
          }}
        />
      </AspectRatio>
      <Box
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        width={['80%', null, '60%', 'unset']}
        zIndex={3}
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
