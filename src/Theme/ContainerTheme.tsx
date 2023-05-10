import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  padding: 0,
  maxWidth: "unset",
};

export const containerTheme = defineStyleConfig({ baseStyle });
