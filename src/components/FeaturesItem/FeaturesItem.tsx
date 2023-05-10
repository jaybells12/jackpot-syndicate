import { Image, Link, ImageProps, LinkProps } from "@chakra-ui/next-js";
import { StaticImageData } from "next/image";
import { useAnimate } from "framer-motion";

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
  const [scope, animate] = useAnimate();

  const handleMouseEnter = async () => {
    await animate(
      scope.current,
      { opacity: 1 },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  const handleMouseLeave = async () => {
    await animate(
      scope.current,
      { opacity: 0 },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  return (
    <>
      <Link
        variant={"feature"}
        href={"/"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...linkProps}
      >
        {item.title}
      </Link>
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
        sx={{ objectFit: "cover", width: "100%", height: "auto" }}
        {...imageProps}
      />
    </>
  );
};
