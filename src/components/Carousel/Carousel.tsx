import { StaticImageData } from 'next/image'
import { TempImage } from '@components/TempImage'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSize } from '@chakra-ui/react-use-size'
import { Box } from '@chakra-ui/react'

export type CarouselProps = {
  images: StaticImageData[]
}

export const Carousel = ({ images }: CarouselProps) => {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timer>()
  const sizeRef = useRef(null)
  const imageSize = useSize(sizeRef)
  const count = useMemo(() => images.length - 1, [images])
  const variants = {
    enter: (distance: number) => {
      return {
        x: distance,
      }
    },
    center: {
      x: 0,
    },
    exit: (distance: number) => {
      return {
        x: -1 * distance,
      }
    },
  }

  // const prevImg = useCallback(() => {
  //   if (count) {
  //     setIndex((s) => (s === 0 ? count : s - 1))
  //   }
  // }, [images, count])

  const nextImg = useCallback(() => {
    if (count) {
      setIndex((s) => (s === count ? 0 : s + 1))
    }
  }, [images, count])

  useEffect(() => {
    if (count) {
      intervalRef.current = setInterval(nextImg, 5000)
    }

    return () => clearInterval(intervalRef.current)
  }, [nextImg, count])

  return (
    <Box ref={sizeRef}>
      <AnimatePresence mode={'popLayout'}>
        <motion.div
          key={images[index].src}
          variants={variants}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
          transition={{ duration: 1 }}
          custom={imageSize?.width}
        >
          <TempImage
            priority
            key={images[index].src}
            src={images[index].src}
            alt={'carousel image'}
            width={images[index].width}
            height={images[index].height}
            sx={{
              height: 'auto',
            }}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
