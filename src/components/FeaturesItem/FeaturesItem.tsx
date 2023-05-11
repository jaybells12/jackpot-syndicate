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
  const opacity = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      animate(linkRef.current, { visibility: "visible" }, { duration: 0 }).then(
        () => {
          animate(opacity, 1, { duration: 0.1, ease: "linear" });
        }
      );
    } else if (!isInView) {
      animate(opacity, 0, { duration: 0.1, ease: "linear" }).then(() => {
        animate(linkRef.current, { visibility: "hidden" }, { duration: 0 });
      });
    }
  }, [isInView]);

  const handleMouseEnter = async () => {
    await animateImg(
      scope.current,
      { opacity: 1 },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  const handleMouseLeave = async () => {
    await animateImg(
      scope.current,
      { opacity: 0 },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  return (
    <>
      <motion.div ref={linkRef} initial={{ opacity: 0 }} style={{ opacity }}>
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
        top={"0"}
        right={"0"}
        bottom={"0"}
        left={"0"}
        zIndex={"-1"}
        opacity={"0"}
        willChange={"opacity"}
        pointerEvents={"none"}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
        }}
        {...imageProps}
      />
    </>
  );
};
