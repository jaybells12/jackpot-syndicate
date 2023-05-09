import {
  Flex,
  Container,
  useDisclosure,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { navLinks } from "src/data/staticData";
import { Logo } from "@components/Logo";

export const NavBar = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      as={"nav"}
      maxWidth={"unset"}
      height={"95px"}
      backgroundColor={"transparent"}
      position={"fixed"}
      top={"0"}
      padding={"1.2rem 1.5rem"}
      zIndex={"banner"}
    >
      <Flex justify={"space-between"} align={"center"} minWidth={"100%"}>
        <Logo width={"145px"} height={"auto"} />
        <UnorderedList variant={"navlinks"} marginInlineStart={0}>
          {navLinks.map((link, idx) => (
            <ListItem>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                {link.text}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <div>
          <Button variant={"primary"}>book now</Button>
          <Button variant={"primary"} marginLeft={"1.125rem"}>
            contact
          </Button>
        </div>
      </Flex>
    </Container>
  );
};
