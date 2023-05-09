import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  hero: defineStyle({
    fontSize: "2.875rem",
    lineHeight: "1.4",
    color: "text.button",
    fontWeight: "300",
  }),
};

export const textTheme = defineStyleConfig({
  variants,
});
