import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const variants = {
  primary: defineStyle({
    width: 'fit-content',
    fontSize: '1rem',
    lineHeight: '1.5',
    backgroundColor: 'transparent',
    color: 'text.light',
    borderColor: 'button.dark.accent',
    borderWidth: '1px',
    borderRadius: '8px',
    padding: '1em 1.5em',
    textTransform: 'uppercase',
    _hover: {
      backgroundColor: 'button.dark.primary',
      borderColor: 'button.dark.primary',
      color: 'text.hover',
      cursor: 'pointer',
    },
  }),
  contact: defineStyle({
    width: 'fit-content',
    fontSize: '0.875rem',
    lineHeight: '1.1',
    bgColor: 'button.dark.primary',
    color: 'text.light',
    padding: '1em 1.25em',
    border: '1px solid',
    borderColor: 'button.dark.primary',
    textAlign: 'center',
    borderRadius: '5px',
    _hover: {
      bgColor: 'button.dark.accent',
      color: 'text.dark',
      cursor: 'pointer',
    },
  }),
}

export default defineStyleConfig({
  variants,
})
