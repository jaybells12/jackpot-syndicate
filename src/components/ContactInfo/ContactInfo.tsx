import { Container, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Phone, Location, Email } from "@components/Icons";

export const ContactInfo = (props: any) => {
  return (
    <Flex
      direction={"column"}
      align={"flex-start"}
      justify={"flex-start"}
      {...props}
    >
      <Container>
        <Heading>Contact Information</Heading>
        <Text>Creativity is a gamble. Hit Jackpot!</Text>
      </Container>
      <Container as={"address"}>
        <Flex>
          <Phone fill={"icon.primary"} width={"24px"} height={"24px"} />
          <Link href={"tel:+13106343794"}>+1.310.634.3794</Link>
        </Flex>
        <Flex>
          <Email fill={"icon.primary"} width={"24px"} height={"24px"} />
          <Link href={"mailto:contact@jackpotsyndicate.com"}>
            Contact@Jackpotsyndicate.com
          </Link>
        </Flex>
        <Flex>
          <Location fill={"icon.primary"} width={"24px"} height={"24px"} />
          <Text>424 Main Street, El Segundo, CA 90245</Text>
        </Flex>
      </Container>
    </Flex>
  );
};
