import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  feature: defineStyle({
    color: "text.medium",
    fontSize: "2.75rem", // 1.75rem on Figma
    fontWeight: "normal",
    lineHeight: "1.25",
    textDecoration: "none",
    display: "block",
    _hover: {
      color: "text.hover",
      textDecoration: "none",
    },
  }),
  contact: defineStyle({
    fontSize: "1rem", // 0.75rem on Figma
    fontStyle: "normal",
    margin: "1rem"
  })
};

export default defineStyleConfig({
  variants,
});
