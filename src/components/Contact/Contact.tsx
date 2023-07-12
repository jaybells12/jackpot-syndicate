import { ContactForm } from '@components/ContactForm'
import { ContactInfo } from '@components/ContactInfo'
import { Container, Flex } from '@chakra-ui/react'
import {
  MutableRefObject,
  RefObject,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

export type OffsetTopHandle = {
  offsetTop: () => number
}

type ContactProps = {
  ref: RefObject<OffsetTopHandle>
}

export const Contact = forwardRef<OffsetTopHandle, ContactProps>(
  (props, ref) => {
    const footerRef = useRef<HTMLElement>(null)

    useImperativeHandle(
      ref,
      () => {
        return {
          offsetTop() {
            if (footerRef.current) {
              return footerRef.current.offsetTop
            } else {
              return 0
            }
          },
        }
      },
      []
    )

    return (
      <Container
        as={'footer'}
        bgColor={'form.accent'}
        paddingBlock={'4rem'}
        ref={footerRef}
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
)
