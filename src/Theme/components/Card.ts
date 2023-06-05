import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = 
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
  service: definePartsStyle({
    container: {
      bgColor: "unset",
      maxWidth: "890px",
      margin: "0 auto",
      position: "relative",
      marginTop: "-13%",
      marginBottom: "3rem",
      overflow: "hidden",
    },
    header:{},
    body: {
      padding: "0",
    },
    footer: {
      minHeight: "180px",
      display: "flex",
      gap: "1.875rem",
      borderRadius: "0 0 10px 10px",
      borderInline: "1px solid rgba(255,255,255,0.2)",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      padding: "1.125rem 7.125rem"
    },
  })
}

export default defineMultiStyleConfig({
  variants,
  defaultProps: {
    //@ts-ignore Doesn't recognize default variants of card component
    variant: "unstyled"
  }
})