import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";

import Button from "./components/Button";
import CloseButton from "./components/CloseButton";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Link from "./components/Link";
import List from "./components/List";
import Text from "./components/Text";
import Input from "./components/Input";
import Card from "./components/Card";

const overrides = {
  colors,
  fonts,
  styles,
  components: {
    Button,
    Card,
    CloseButton,
    Container,
    Heading,
    Link,
    List,
    Text,
    Input,
  },
};

export default extendTheme(overrides);
