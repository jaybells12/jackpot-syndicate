import { Link, ImageProps, LinkProps } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'
import { StaticImageData } from 'next/image'
import { useAnimate } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import { useInView, animate, motion } from 'framer-motion'
import { TempImage } from '@components/TempImage'
import { useIsTouchScreen } from 'src/hooks/'

export type FeaturesItem = {
  linkProps?: Partial<LinkProps>
  imageProps?: Partial<ImageProps>
  item: {
    title: string
    image: StaticImageData
    url: string
  }
}

export const FeaturesItem = ({ item, linkProps, imageProps }: FeaturesItem) => {
  const [scope, animateImg] = useAnimate()
  const linkRef = useRef(null)
  const isInView = useInView(linkRef, { margin: '-28% 0px -33% 0px' })
  const isCenter = useInView(linkRef, {
    margin: '-40% 0px -40% 0px',
    amount: 0.5,
  })
  const isTouchScreen = useIsTouchScreen()

  const handleMouseEnter = useCallback(async () => {
    await animateImg(
      scope.current,
      { opacity: 1 },
      { duration: 0.3, ease: 'easeOut' }
    )
  }, [scope])

  const handleMouseLeave = useCallback(async () => {
    await animateImg(
      scope.current,
      { opacity: 0 },
      { duration: 0.3, ease: 'easeOut' }
    )
  }, [scope])

  useEffect(() => {
    if (isInView) {
      animate(linkRef.current, { visibility: 'visible' }, { duration: 0 })
    } else if (!isInView) {
      animate(linkRef.current, { visibility: 'hidden' }, { duration: 0 })
    }
  }, [isInView])

  useEffect(() => {
    if (isTouchScreen && isCenter) {
      handleMouseEnter()
    } else if (isTouchScreen) {
      handleMouseLeave()
    }
  }, [isTouchScreen, isCenter, handleMouseEnter, handleMouseLeave])

  return (
    <Box>
      <motion.div
        ref={linkRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          paddingBlock: '3.375rem',
          paddingLeft: '13%',
          paddingRight: 'auto',
        }}
      >
        <Link
          variant={'feature'}
          href={item.url}
          position={'relative'}
          zIndex={'6'}
        >
          {item.title}
        </Link>
      </motion.div>
      <TempImage
        ref={scope}
        src={item.image.src}
        alt={item.title}
        width={item.image.width}
        height={item.image.height}
        position={'fixed'}
        inset={'0'}
        zIndex={'5'}
        opacity={'0'}
        pointerEvents={'none'}
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
          minHeight: '100%', // used this to bandaid narrow viewports
        }}
        {...imageProps}
      />
    </Box>
  )
}
