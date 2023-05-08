import { Flex, Container } from "@chakra-ui/react";
import { Logo } from "@components/Logo";

import { NavMenu } from "@components/NavMenu";

export const NavBar = (props: any) => {
  return (
    <Container maxWidth={"unset"} centerContent>
      <Flex paddingInline={"1.875rem"} paddingTop={"1.6875rem"}>
        <Logo alignSelf={"flex-start"} />
      </Flex>
    </Container>
  );
};
