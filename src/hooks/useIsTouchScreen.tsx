import { useMediaQuery } from '@chakra-ui/react'

export const useIsTouchScreen = () => {
  const [hover, coarse] = useMediaQuery(['(hover:none)', '(pointer:coarse)'])

  return hover && coarse
}
