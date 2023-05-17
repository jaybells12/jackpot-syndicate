import { ContactForm } from "@components/ContactForm";
import { ContactInfo } from "@components/ContactInfo";
import { Container } from "@chakra-ui/react";

export const Contact = (props: any) => {
  return (
    <Container bgColor={"form.accent"}>
      <ContactInfo bgColor={"form.primary"} />
      <ContactForm bgColor={"form.primary"} />
    </Container>
  );
};
