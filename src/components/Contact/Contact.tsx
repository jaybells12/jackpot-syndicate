import { ContactForm } from "@components/ContactForm";
import { ContactInfo } from "@components/ContactInfo";
import { Container, Flex } from "@chakra-ui/react";
import { RefObject, useImperativeHandle, useRef } from "react";

export type OffsetTopHandle = {
  offsetTop: () => number;
};

export type ContactProps = {
  forwardedRef: RefObject<OffsetTopHandle>;
};

export const Contact: React.FunctionComponent<ContactProps> = ({
  forwardedRef,
}) => {
  const footerRef = useRef<HTMLElement>(null);

  useImperativeHandle(forwardedRef, () => {
    return {
      offsetTop() {
        if (footerRef.current) {
          return footerRef.current.offsetTop;
        } else {
          return 0;
        }
      },
    };
  }, []);

  return (
    <Container
      as={"footer"}
      bgColor={"form.accent"}
      paddingBlock={"4rem"}
      ref={footerRef}
    >
      <Flex
        justify={"center"}
        margin={"0 auto"}
        flexDirection={["column", null, "row"]}
        bgColor={"form.primary"}
        borderRadius={"10px"}
        gap={["0", null, null, "8rem"]}
        maxWidth={"min(85%, 1200px)"}
        minWidth={[null, null, "600px"]}
      >
        <ContactInfo width={"100%"} flex={"1"} />
        <ContactForm flex={"2"} />
      </Flex>
    </Container>
  );
};
