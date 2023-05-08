import { Flex, Container, useDisclosure } from "@chakra-ui/react";
import { Burger } from "@icons/Burger";
import { Logo } from "@components/Logo";

import { NavMenu } from "@components/NavMenu";

export const NavBar = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container as={"nav"} maxWidth={"unset"} centerContent>
      <Flex
        paddingInline={"1.875rem"}
        paddingTop={"1.6875rem"}
        justify={"space-between"}
        align={"center"}
        minWidth={"100%"}
      >
        <Logo width={"200px"} height={"auto"} />
        <Burger
          fill={"brand.trim"}
          width={"3.125rem"}
          height={"auto"}
          padding={"0.625px"}
          onClick={onOpen}
        />
        <NavMenu isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Container>
  );
};
