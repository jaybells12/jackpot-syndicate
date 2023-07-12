import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const variants = {
  feature: defineStyle({
    color: 'text.medium',
    fontSize: '2.75rem', // 1.75rem on Figma
    fontWeight: 'normal',
    lineHeight: '1.25',
    textDecoration: 'none',
    display: 'block',
    _hover: {
      color: 'text.hover',
      textDecoration: 'none',
    },
  }),
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
      textDecoration: 'none',
      color: 'text.hover',
      cursor: 'pointer',
    },
  }),
  contact: defineStyle({
    fontSize: '1rem', // 0.75rem on Figma
    fontStyle: 'normal',
    margin: '1rem',
  }),
}

export default defineStyleConfig({
  variants,
})
