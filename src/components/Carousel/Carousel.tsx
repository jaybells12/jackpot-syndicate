import { StaticImageData } from 'next/image'
import { TempImage } from '@components/TempImage'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSize } from '@chakra-ui/react-use-size'
import { Box } from '@chakra-ui/react'
import { rangeWrap } from 'src/utils'

export type CarouselProps = {
  images: StaticImageData[]
}

export const Carousel = ({ images }: CarouselProps) => {
  const intervalRef = useRef<NodeJS.Timer | null>()
  const sizeRef = useRef(null)
  const imageSize = useSize(sizeRef)
  const count = useMemo(() => images.length - 1, [images])
  // Infinite pagination with wrap function allows for uniquing key of motion element
  const [page, setPage] = useState(0)
  const index = rangeWrap(0, count, page)

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

  const nextImg = useCallback(() => {
    if (count) {
      setPage((s) => s + 1)
    }
  }, [images, count])

  useEffect(() => {
    if (count && !intervalRef.current) {
      intervalRef.current = setInterval(nextImg, 5000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [nextImg, count])

  return (
    <Box ref={sizeRef}>
      <AnimatePresence mode={'popLayout'}>
        <motion.div
          key={page}
          variants={variants}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
          transition={{ duration: 1 }}
          custom={imageSize?.width}
        >
          <TempImage
            priority
            src={images[index].src}
            alt={'carousel image'}
            width={images[index].width}
            height={images[index].height}
            sx={{
              height: 'auto',
              width: imageSize?.width || 'auto',
            }}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
