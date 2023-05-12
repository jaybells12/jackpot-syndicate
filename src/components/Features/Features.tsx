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
      {/* <Box
        width={"100%"}
        height={"100%"}
        opacity={0.75}
        position={"fixed"}
        inset={0}
        pointerEvents={"none"}
        // bgGradient={
        //   "linear(to-t,blue 0%, blue 20%, pink 30%, pink 70%, blue 80%, blue 100%)"
        // }
      ></Box> */}
      {/* Scroll Behavior is not captured by container unless mouse is moved while inside it*/}

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

/**
 *<Box
        height={"70vh"}
        overflowY={"auto"}
        background={"transparent"}
        marginBlock={"100svh"}
        scrollSnapStop={"always"}
        sx={{
          scrollbarWidth: "none",
          msOverFlowStyle: "none",
        }}
      >
 *
<Box
        ref={boxRef}
        height={"70vh"}
        overflowY={"auto"}
        background={"transparent"}
        marginBlock={"100svh"}
        onScroll={(e) => handleWheel(e)}
        // onMouseEnter={(e) => handleWheel(e)}
        // onWheel={(e) => handleWheel(e)}
        // onClick={() => console.log("Clicked")}
        sx={{
          scrollbarWidth: "none",
          msOverFlowStyle: "none",
        }}
      >


 */
