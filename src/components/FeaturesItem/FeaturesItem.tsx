import { Image, Link, ImageProps, LinkProps } from "@chakra-ui/next-js";
import { Box, useDimensions } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { useAnimate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, MutableRefObject } from "react";
import { useInView, animate, motion } from "framer-motion";

export type FeaturesItem = {
  linkProps?: Partial<LinkProps>;
  imageProps?: Partial<ImageProps>;
  item: {
    title: string;
    image: StaticImageData;
  };
};

export const FeaturesItem = (props: FeaturesItem) => {
  const { item, linkProps, imageProps } = props;
  const [scope, animateImg] = useAnimate();
  const linkRef = useRef(null);
  const isInView = useInView(linkRef, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (isInView) {
      animate(linkRef.current, { visibility: "visible" }, { duration: 0 });
    } else if (!isInView) {
      animate(linkRef.current, { visibility: "hidden" }, { duration: 0 });
    }
  }, [isInView]);

  const handleMouseEnter = async () => {
    await animateImg("img", { opacity: 1 }, { duration: 0.3, ease: "easeOut" });
  };

  const handleMouseLeave = async () => {
    await animateImg("img", { opacity: 0 }, { duration: 0.3, ease: "easeOut" });
  };

  return (
    <Box ref={scope}>
      <Image
        src={item.image.src}
        alt={item.title}
        width={item.image.width}
        height={item.image.height}
        position={"fixed"}
        inset={"0"}
        opacity={"0"}
        zIndex={"2"}
        pointerEvents={"none"}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          maskImage:
            "linear-gradient(to top,rgb(255, 255, 255) 0%, rgb(255, 255, 255) 35%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 75%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
        }}
        {...imageProps}
      />
      <motion.div ref={linkRef}>
        <Link
          variant={"feature"}
          href={"/"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...linkProps}
        >
          {item.title}
        </Link>
      </motion.div>
      <Image
        ref={scope}
        src={item.image.src}
        alt={item.title}
        width={item.image.width}
        height={item.image.height}
        position={"fixed"}
        inset={"0"}
        zIndex={"-1"}
        opacity={"0"}
        pointerEvents={"none"}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
        {...imageProps}
      />
    </Box>
  );
};
