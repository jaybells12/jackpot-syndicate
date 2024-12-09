import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  service: definePartsStyle({
    container: {
      bgColor: "unset",
      maxWidth: ["86%", null, null, "890px"],
      margin: "0 auto",
      position: "relative",
      // marginTop: ['-6rem', '-8rem', '-12rem', '-16rem'],
      marginBottom: "3rem",
      overflow: "hidden",
    },
    header: {},
    body: {
      padding: "0",
    },
    footer: {
      minHeight: [null, null, "180px"],
      display: "flex",
      flexDirection: ["column", null, "row"],
      gap: "1.875rem",
      borderRadius: "0 0 10px 10px",
      borderInline: "1px solid rgba(255,255,255,0.2)",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      padding: ["1.125em", null, "1.125em 7.125em"],
    },
  }),
};

export default defineMultiStyleConfig({
  variants,
  defaultProps: {
    //@ts-ignore Doesn't recognize default variants of card component
    variant: "unstyled",
  },
});
