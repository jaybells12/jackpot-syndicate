import { extendTheme } from "@chakra-ui/react";
import { containerTheme } from "./ContainerTheme";
import { closeButtonTheme } from "./CloseButtonTheme";
import { buttonTheme } from "./ButtonTheme";
import { listTheme } from "./ListTheme";
import { headingTheme } from "./HeadingTheme";
import { textTheme } from "./TextTheme";

const theme = extendTheme({
  colors: {
    text: {
      primary: "#909090",
      button: "#d9d9d9",
      hover: "#fbfbfb",
    },
    background: {
      dark: "#0d0d0d",
      light: "#ededed",
    },
    button: {
      primary: "#1a1a1a",
      accent: "#d9d9d9",
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: "background.dark",
        marginRight: "0",
      },
    },
  },
  components: {
    Text: textTheme,
    Heading: headingTheme,
    Button: buttonTheme,
    List: listTheme,
    Container: containerTheme,
    CloseButton: closeButtonTheme,
  },
});

export default theme;
