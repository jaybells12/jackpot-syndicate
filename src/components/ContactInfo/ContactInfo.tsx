import { Container, Flex, Heading, Text, FlexProps } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Phone, Location, Email } from '@components/Icons'

export const ContactInfo = (props: FlexProps) => {
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      paddingBlock={'1.125em'}
      paddingLeft={'1.75em'}
      gap={'1.5rem'}
      {...props}
    >
      <Container>
        <Heading variant={'contact'}>Contact Information</Heading>
        <Text marginTop={'0.5rem'}>Creativity is a gamble. Hit Jackpot!</Text>
      </Container>
      <Container as={'address'}>
        <Flex align={'center'}>
          <Phone
            fill={'icon.dark'}
            width={'24px'}
            height={'24px'}
          />
          <Link
            variant={'contact'}
            href={'tel:+13106343794'}
          >
            +1.310.634.3794
          </Link>
        </Flex>
        <Flex align={'center'}>
          <Email
            fill={'icon.dark'}
            width={'24px'}
            height={'24px'}
          />
          <Link
            variant={'contact'}
            href={'mailto:contact@jackpotsyndicate.com'}
          >
            Contact@Jackpotsyndicate.com
          </Link>
        </Flex>
        <Flex align={'center'}>
          <Location
            fill={'icon.dark'}
            width={'24px'}
            height={'24px'}
          />
          <Text variant={'contact'}>424 Main Street, El Segundo, CA 90245</Text>
        </Flex>
      </Container>
    </Flex>
  )
}
