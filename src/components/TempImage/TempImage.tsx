import { chakra, ChakraComponent, shouldForwardProp } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
// This fix is temporary until chakra/next-js play nice together again
export const TempImage: ChakraComponent<'img', NextImageProps> = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'src',
      'alt',
      'width',
      'height',
      'fill',
      'loader',
      'quality',
      'priority',
      'loading',
      'placeholder',
      'blurDataURL',
      'unoptimized',
      'onLoadingComplete',
      'style',
    ].includes(prop),
});
