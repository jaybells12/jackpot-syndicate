import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
// import { Image } from '@chakra-ui/next-js'
import { TempImage } from '@components/TempImage'
import { StaticImageData } from 'next/image'

export type ServiceCardProps = {
  cardImg: StaticImageData
  altText: string
  titleLeft: string
  textLeft: string
  titleRight: string
  textRight: string
}

export const ServiceCard = ({
  cardImg,
  altText,
  titleRight,
  textRight,
  titleLeft,
  textLeft,
}: ServiceCardProps) => {
  return (
    <Card
      variant={'service'}
      bgColor={'background.dark'}
    >
      <CardBody>
        <TempImage
          src={cardImg}
          alt={altText}
          priority
        />
      </CardBody>
      <CardFooter>
        <Box as={'article'}>
          <Heading
            as={'h3'}
            variant={'card'}
          >
            {titleLeft}
          </Heading>
          <Text variant={'card'}>{textLeft}</Text>
        </Box>
        <Box
          as={'article'}
          minWidth={'30%'}
        >
          <Heading
            as={'h3'}
            variant={'card'}
          >
            {titleRight}
          </Heading>
          <Text variant={'card'}>{textRight}</Text>
        </Box>
      </CardFooter>
    </Card>
  )
}
