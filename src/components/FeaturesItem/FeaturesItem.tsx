import { Link, ImageProps, LinkProps, Image } from '@chakra-ui/next-js'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { StaticImageData } from 'next/image'
import { useAnimate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView, animate, motion } from 'framer-motion'
import { TempImage } from '@components/TempImage'

export type FeaturesItem = {
  linkProps?: Partial<LinkProps>
  imageProps?: Partial<ImageProps>
  item: {
    title: string
    image: StaticImageData
    url: string
  }
}

export const FeaturesItem = (props: FeaturesItem) => {
  const { item, linkProps, imageProps } = props
  // const rootMargin = useBreakpointValue({base: })
  const [scope, animateImg] = useAnimate()
  const linkRef = useRef(null)
  const isInView = useInView(linkRef, { margin: '-28% 0px -33% 0px' })

  useEffect(() => {
    if (isInView) {
      animate(linkRef.current, { visibility: 'visible' }, { duration: 0 })
    } else if (!isInView) {
      animate(linkRef.current, { visibility: 'hidden' }, { duration: 0 })
    }
  }, [isInView])

  const handleMouseEnter = async () => {
    await animateImg(
      scope.current,
      { opacity: 1 },
      { duration: 0.3, ease: 'easeOut' }
    )
  }

  const handleMouseLeave = async () => {
    await animateImg(
      scope.current,
      { opacity: 0 },
      { duration: 0.3, ease: 'easeOut' }
    )
  }

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
