import { TempImage } from '@components/TempImage'

export const PaperPlane = () => {
  return (
    <TempImage
      src={'/plane.gif'}
      alt={'loading...'}
      width={133}
      // Chakra value for height (10 = 40px)
      height={10}
    />
  )
}
