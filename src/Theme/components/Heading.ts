import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  hero: defineStyle({
    fontSize: "3.375rem",
    lineHeight: "1.2",
    color: "text.light",
    fontWeight: "400",
  }),
  contact: defineStyle({
    fontWeight: "medium",
    fontSize: "1.75rem",
    lineHeight: "2rem",
    color: "test.dark"
  })
};

export default defineStyleConfig({
  variants,
});
