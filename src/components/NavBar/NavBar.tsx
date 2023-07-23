import {
  Flex,
  Container,
  useDisclosure,
  Button,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { navLinks } from 'src/data/staticData'
import { Logo } from '@components/Logo'
import { useScrollEasing } from 'src/hooks/useScrollIntoView'
import { OffsetTopHandle } from '@components/Contact'
import { RefObject, useRef } from 'react'

type NavBarProps = {
  footerRef: RefObject<OffsetTopHandle>
}

export const NavBar = ({ footerRef }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navRef = useRef<HTMLElement>(null)

  const HEADER_HEIGHT = 95

  return (
    <Container
      as={'header'}
      ref={navRef}
      height={`${HEADER_HEIGHT}px`}
      marginBottom={`-${HEADER_HEIGHT}px`}
      backgroundColor={'transparent'}
      position={'sticky'}
      top={'0'}
      padding={'1.2rem 1.5rem'}
      zIndex={'banner'}
    >
      <Flex
        as={'nav'}
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
