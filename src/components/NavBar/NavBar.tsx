import { Flex, Container, useDisclosure, Button, UnorderedList, ListItem, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { navLinks } from 'src/data/staticData';
import { Logo } from '@components/Logo';
import { useScrollIntoView } from 'src/hooks/useScrollIntoView';
import { OffsetTopHandle } from '@components/Contact';
import { RefObject, useRef } from 'react';

type NavBarProps = {
  footerRef: RefObject<OffsetTopHandle>;
};
export const HEADER_HEIGHT = 95;

export const NavBar = ({ footerRef }: NavBarProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const navRef = useRef<HTMLElement>(null);

  return (
    <Container
      as={'header'}
      ref={navRef}
      height={`${HEADER_HEIGHT}px`}
      backgroundColor={'background.header'}
      position={'sticky'}
      top={'0'}
      paddingBlock={'1.2rem'}
      paddingInline={['1rem', null, null, null, '1.5rem']}
      // padding={['1.2rem 1.5rem']}
      zIndex={'banner'}>
      <Flex as={'nav'} justify={['center', null, 'space-between']} align={'center'} minWidth={'100%'} gap={'1rem'}>
        <Link href={'/'}>
          <Logo width={'145px'} height={'auto'} />
        </Link>
        <UnorderedList variant={'navlinks'} marginInlineStart={0}>
          {navLinks.map((link, idx) => (
            <ListItem key={idx}>
              <Link href={link.url} _hover={{ textDecoration: 'none' }}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box display={['none', null, 'flex']}>
          <Button display={['none', null, null, 'inline-flex']} onClick={useScrollIntoView(footerRef)} variant={'primary'}>
            book now
          </Button>
          <Button onClick={useScrollIntoView(footerRef)} variant={'primary'} marginLeft={[null, null, null, '1.125rem']}>
            contact
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};
