import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variants = {
  hero: defineStyle({
    fontSize: "clamp(1.5rem, 3vw, 4rem)", //2.875rem,
    lineHeight: "1.4",
    color: "text.light",
    fontWeight: "300",
  }),
  contact: defineStyle({
    fontSize: "1rem", // 0.75rem on Figma
    fontStyle: "normal",
    margin: "1rem",
  }),
  card: defineStyle({
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.125rem",
    color: "text.light",
  }),
  fineprint: defineStyle({
    textAlign: "center",
    marginTop: "1em",
    fontSize: "0.65rem",
    fontWeight: "200",
  }),
};

export default defineStyleConfig({
  variants,
});
