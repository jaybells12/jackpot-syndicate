import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  primary: defineStyle({
    fontSize: "1rem",
    lineHeight: "1.5",
    backgroundColor: "transparent",
    color: "text.button",
    borderColor: "button.accent",
    borderWidth: "1px",
    borderRadius: "8px",
    padding: "1em 1.5em",
    textTransform: "uppercase",
    _hover: {
      backgroundColor: "button.primary",
      borderColor: "button.primary",
      color: "text.hover",
      cursor: "pointer",
    },
  }),
};

export const buttonTheme = defineStyleConfig({
  variants,
});
