import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const variants = {
  default: definePartsStyle({
    field: {
      bgColor: "inherit",
      borderBottom: "1px solid",
      borderColor: "form.trim",
      borderRadius: "none",
      height: "28px"
    },
  })
}

export default defineMultiStyleConfig({ 
  variants,
  defaultProps: {
    variant: "default",
  } 
})