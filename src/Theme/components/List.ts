import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const variants = {
  navlinks: definePartsStyle({
    container: {
      display: "flex",
      gap: "2.75rem", // 2.25rem on Figma
      alignItems: "center",
      justifyContent: "center",
    },
    item: {
      listStyle: "none",
      fontSize: "1.25rem", // 1rem on Figma
      lineHeight: "1.5",
      color: "text.medium",
      _hover: {
        color: "text.hover",
        textDecoration: "none",
      },
    },
  }),
};

export default defineMultiStyleConfig({ variants });
