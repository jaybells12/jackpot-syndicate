import { ContactForm } from "@components/ContactForm";
import { ContactInfo } from "@components/ContactInfo";
import { Container, Flex } from "@chakra-ui/react";

export const Contact = (props: any) => {
  return (
    <Container as={"section"} bgColor={"form.accent"} paddingBlock={"4rem"}>
      <Flex
        justify={"center"}
        width={"fit-content"}
        margin={"0 auto"}
        bgColor={"form.primary"}
        borderRadius={"10px"}
        gap={"8rem"}
      >
        <ContactInfo />
        <ContactForm />
      </Flex>
    </Container>
  );
};
