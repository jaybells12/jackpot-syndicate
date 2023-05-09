import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const variants = {
  navlinks: definePartsStyle({
    container: {
      display: "flex",
      gap: "2.25rem",
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      listStyle: "none",
      fontSize: "1rem",
      lineHeight: "1.5em",
      color: "text.primary",
      _hover: {
        color: "text.hover",
        textDecoration: "none",
      },
    },
  }),
};

export const listTheme = defineMultiStyleConfig({ variants });
