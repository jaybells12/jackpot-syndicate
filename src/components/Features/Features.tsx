import { Container } from "@chakra-ui/react";
import { FeaturesItem } from "@components/FeaturesItem";
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
      paddingBlock={"25svh 25svh"}
      position={"relative"} // pos & zindex to create new stacking context
      zIndex={"10"}
    >
      {features.map((item, idx) => (
        <FeaturesItem key={idx} item={item} />
      ))}
    </Container>
  );
};
