import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xl = defineStyle({
  fontSize: "2rem",
});

export const closeButtonTheme = defineStyleConfig({
  sizes: { xl },
});
