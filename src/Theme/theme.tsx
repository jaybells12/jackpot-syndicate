import { extendTheme } from "@chakra-ui/react";
import { containerTheme } from "./ContainerTheme";
import { closeButtonTheme } from "./CloseButtonTheme";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#161719",
      trim: "#8b8b8c",
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "brand.primary",
        marginRight: "0",
      },
    },
  },
  components: {
    Container: containerTheme,
    CloseButton: closeButtonTheme,
  },
});

export default theme;
