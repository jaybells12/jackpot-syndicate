import { Box, Container, useDisclosure } from "@chakra-ui/react";
import { FeaturesItem } from "@components/FeaturesItem";
import { features } from "src/data/staticData";

export const Features = (props: any) => {
  return (
    <Container
      as={"section"}
      width={"100%"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      {features.map((item, idx) => (
        <Box key={idx} marginLeft={"13%"}>
          <FeaturesItem item={item} linkProps={{ paddingBlock: "3.375rem" }} />
        </Box>
      ))}
    </Container>
  );
};
