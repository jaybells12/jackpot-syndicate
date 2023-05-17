import { Box, Container, useDisclosure } from "@chakra-ui/react";
import { FeaturesItem } from "@components/FeaturesItem";
import { useRef, MutableRefObject } from "react";
import { features } from "src/data/staticData";

export const Features = (props: any) => {
  return (
    <Container
      as={"section"}
      width={"100%"}
      minHeight={"100svh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      position={"relative"} // remove
    >
      {features.map((item, idx) => (
        <Box
          key={idx}
          _first={{ marginTop: "100svh" }}
          _last={{ marginBottom: "100svh" }}
        >
          <FeaturesItem
            item={item}
            linkProps={{ paddingBlock: "3.375rem", paddingLeft: "13%" }}
          />
        </Box>
      ))}
    </Container>
  );
};
