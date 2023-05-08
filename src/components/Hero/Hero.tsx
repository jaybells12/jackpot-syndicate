import {
  Container,
  ContainerProps,
  AspectRatioProps,
  AspectRatio,
} from "@chakra-ui/react";

export const Hero = (props: ContainerProps & AspectRatioProps) => {
  return (
    <Container as={"section"} maxWidth={"unset"} width={"full"}>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={
            "https://player.vimeo.com/video/813019070?h=64f8db3e7b&title=0&portrait=0&muted=1&autopause=0&loop=1&background=1&app_id=122963"
          }
          referrerPolicy={"no-referrer"}
        />
      </AspectRatio>
    </Container>
  );
};
