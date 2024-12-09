import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variants = {
  feature: defineStyle({
    color: 'text.medium',
    width: 'fit-content',
    maxWidth: '86%',
    padding: '0.25em',
    borderRadius: '3xl',
    fontSize: 'clamp(2rem, 3vw, 3rem)', // 2.75rem
    fontWeight: 'normal',
    lineHeight: '1.25',
    textDecoration: 'none',
    display: 'block',
    _hover: {
      backgroundColor: '#0006',
      color: 'text.hover',
      textShadow: '1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black',
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
};

export default defineStyleConfig({
  variants,
});
