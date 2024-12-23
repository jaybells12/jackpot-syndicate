import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variants = {
  hero: defineStyle({
    fontSize: 'clamp(2rem, 3vw, 5rem)', //3.375rem
    fontWeight: '400',
    lineHeight: '1.2',
    color: 'text.light',
  }),
  contact: defineStyle({
    fontSize: '1.75rem',
    fontWeight: '500',
    lineHeight: '2rem',
    color: 'text.dark',
  }),
  card: defineStyle({
    fontSize: '1.75rem',
    fontWeight: '600',
    lineHeight: '2rem',
    color: 'text.light',
    marginBottom: '0.375rem',
  }),
  service: defineStyle({
    width: 'fit-content',
    height: 'fit-content',
    display: 'block',
    margin: '0 auto',
    marginBottom: ['5rem', null, '6rem', null, '7rem'],
    fontSize: 'clamp(2.25rem, 10vw, 3.375rem)',
    paddingInline: '2rem',
    fontWeight: '400',
    lineHeight: '1.2',
    color: 'text.light',
  }),
};

export default defineStyleConfig({
  variants,
});
