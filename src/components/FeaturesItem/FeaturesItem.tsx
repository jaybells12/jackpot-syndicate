import { Link, ImageProps, LinkProps } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'
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
    await animateImg('img', { opacity: 1 }, { duration: 0.3, ease: 'easeOut' })
  }

  const handleMouseLeave = async () => {
    await animateImg('img', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' })
  }
  // Box has pos:relative & zIndex: 10 to create new stacking context
  return (
    <Box ref={scope}>
      <TempImage
        src={item.image.src}
        alt={item.title}
        width={item.image.width}
        height={item.image.height}
        position={'fixed'}
        inset={'0'}
        opacity={'0'}
        zIndex={'7'}
        pointerEvents={'none'}
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto',
          minHeight: '100%', // used this to bandaid narrow viewports
          maskImage:
            'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 12%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 50%, rgb(255, 255, 255) 65%, rgb(255, 255, 255) 100%)',
        }}
        {...imageProps}
      />
      <motion.div ref={linkRef}>
        <Link
          variant={'feature'}
          href={item.url}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          position={'relative'}
          zIndex={'6'}
          {...linkProps}
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
