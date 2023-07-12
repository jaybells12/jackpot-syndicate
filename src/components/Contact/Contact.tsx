import { ContactForm } from '@components/ContactForm'
import { ContactInfo } from '@components/ContactInfo'
import { Container, Flex } from '@chakra-ui/react'

export const Contact = (props: any) => {
  return (
    <Container
      as={'footer'}
      bgColor={'form.accent'}
      paddingBlock={'4rem'}
    >
      <Flex
        justify={'center'}
        margin={'0 auto'}
        bgColor={'form.primary'}
        borderRadius={'10px'}
        gap={'8rem'}
        maxWidth={'min(85%, 1200px)'}
        minWidth={'600px'}
      >
        <ContactInfo
          width={'100%'}
          flex={'1'}
        />
        <ContactForm
          width={'100%'}
          flex={'2'}
        />
      </Flex>
    </Container>
  )
}
