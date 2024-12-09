import { StaticImageData } from 'next/image';
import { TempImage } from '@components/TempImage';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSize } from '@chakra-ui/react-use-size';
import { Box, Circle, HStack } from '@chakra-ui/react';
import { rangeWrap } from 'src/utils';

export type CarouselProps = {
  images: StaticImageData[];
};

export const Carousel = ({ images }: CarouselProps) => {
  const intervalRef = useRef<NodeJS.Timer | null>();
  const sizeRef = useRef(null);
  const imageSize = useSize(sizeRef);
  const count = useMemo(() => images.length - 1, [images]);
  // Infinite pagination with wrap function allows for uniquing key of motion element
  const [[page, direction], setPage] = useState([0, 0]);
  const index = rangeWrap(0, count, page);
  // Toggle to restart autoplay
  const [autoplay, setAutoplay] = useState(false);
  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
      };
    },
    center: {
      x: 0,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
      };
    },
  };

  const nextImg = useCallback(() => {
    if (count) {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }
  }, [count]);

  const startAutoplay = () => {
    if (count && !intervalRef.current) {
      intervalRef.current = setInterval(nextImg, 5000);
    }
  };
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (count && !intervalRef.current) {
      intervalRef.current = setInterval(nextImg, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [nextImg, count, autoplay]);

  return (
    <Box ref={sizeRef} position={'relative'}>
      <AnimatePresence mode={'popLayout'} initial={false} custom={direction}>
        <motion.div
          key={page}
          variants={variants}
          initial={'enter'}
          animate={'center'}
          exit={'exit'}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          custom={direction}
          drag={'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragStart={() => stopAutoplay()}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
            setAutoplay((s) => !s);
          }}>
          <TempImage
            priority
            placeholder={'blur'}
            src={images[index]}
            alt={'carousel image'}
            width={images[index].width}
            height={images[index].height}
            sx={{
              height: 'auto',
              width: imageSize?.width || 'auto',
            }}
            sizes={'(max-width: 992px) 100vw, (max-width: 1536px) 75vw, 50vw'}
            pointerEvents={'none'}
          />
        </motion.div>
      </AnimatePresence>
      <HStack position={'absolute'} bottom={0} width={'100%'} justify={'center'}>
        {count && images.map((_, idx) => <Circle key={idx} size={[2, 3, 4]} bgColor={index === idx ? 'white' : 'gray.500'} />)}
      </HStack>
    </Box>
  );
};

// On drag start, cancel interval
// on drag end, check distance moved, and in what direction, set page
