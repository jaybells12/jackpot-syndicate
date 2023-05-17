import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  hero: defineStyle({
    fontSize: "3.375rem",
    lineHeight: "1.2",
    color: "text.button",
    fontWeight: "400",
  }),
};

export default defineStyleConfig({
  variants,
});
