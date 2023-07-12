import {
  Flex,
  Container,
  useDisclosure,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { navLinks } from 'src/data/staticData'
import { Logo } from '@components/Logo'
import { useScrollEasing } from 'src/hooks/useScrollIntoView'

export const NavBar = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        justify={'space-between'}
        align={'center'}
        minWidth={'100%'}
      >
        <Logo
          width={'145px'}
          height={'auto'}
        />
        <UnorderedList
          variant={'navlinks'}
          marginInlineStart={0}
        >
          {navLinks.map((link, idx) => (
            <ListItem key={idx}>
              <Link
                href={'#'}
                _hover={{ textDecoration: 'none' }}
              >
                {link.text}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <div>
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
        </div>
      </Flex>
    </Container>
  )
}
