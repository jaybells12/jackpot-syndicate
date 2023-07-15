import {
  Flex,
  Container,
  useDisclosure,
  Button,
  UnorderedList,
  ListItem,
  useBreakpoint,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { navLinks } from 'src/data/staticData'
import { Logo } from '@components/Logo'
import { useScrollEasing } from 'src/hooks/useScrollIntoView'
import { OffsetTopHandle } from '@components/Contact'
import { RefObject } from 'react'

type NavBarProps = {
  footerRef: RefObject<OffsetTopHandle>
}

export const NavBar = (props: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const breakpoint = useBreakpoint()
  // const breakpointValue = useBreakpointValue()
  console.log(breakpoint)
  const { footerRef } = props // type this out
  return (
    <Container
      as={'nav'}
      height={'95px'}
      backgroundColor={'transparent'}
      position={'fixed'}
      top={'0'}
      padding={'1.2rem 1.5rem'}
      zIndex={'banner'}
    >
      <Flex
        justify={['center', null, 'space-between']}
        align={'center'}
        minWidth={'100%'}
      >
        <Link href={'/'}>
          <Logo
            width={'145px'}
            height={'auto'}
          />
        </Link>
        <UnorderedList
          variant={'navlinks'}
          marginInlineStart={0}
          display={['none', null, 'flex']}
        >
          {navLinks.map((link, idx) => (
            <ListItem key={idx}>
              <Link
                href={link.url}
                _hover={{ textDecoration: 'none' }}
              >
                {link.text}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box display={['none', null, 'flex']}>
          <Button
            onClick={useScrollEasing(footerRef)}
            variant={'primary'}
          >
            book now
          </Button>
          <Button
            onClick={useScrollEasing(footerRef)}
            variant={'primary'}
            marginLeft={'1.125rem'}
          >
            contact
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}
