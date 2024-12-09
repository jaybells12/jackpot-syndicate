import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const variants = {
  navlinks: definePartsStyle({
    container: {
      display: ['none', null, 'flex'],
      gap: [null, null, '1rem', null, '2rem', '2.75rem'], // 2.25rem on Figma
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      maxWidth: [null, null, '130px', '160px'],
      width: 'fit-content',
      textAlign: 'center',
      listStyle: 'none',
      fontSize: [null, null, '1rem', '1.25rem'], // 1rem on Figma
      lineHeight: '1', // changing this
      color: 'text.medium',
      _hover: {
        color: 'text.hover',
        textDecoration: 'none',
      },
    },
  }),
};

export default defineMultiStyleConfig({ variants });
