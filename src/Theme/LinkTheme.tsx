import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  feature: defineStyle({
    color: "text.primary",
    fontSize: "3rem", // 1.75rem on Figma
    fontWeight: "normal",
    lineHeight: "1.25",
    textDecoration: "none",
    display: "block",
    _hover: {
      color: "text.hover",
      textDecoration: "none",
    },
  }),
};

export const linkTheme = defineStyleConfig({
  variants,
});
