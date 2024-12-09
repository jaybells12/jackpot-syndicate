import { Box } from '@chakra-ui/react';
import React, { IframeHTMLAttributes, useEffect, useState } from 'react';

type IframeFacadeProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  Facade: React.FunctionComponent;
};

export const IframeFacade: React.FunctionComponent<IframeFacadeProps> = ({ Facade, ...rest }) => {
  return (
    <>
      <Facade />
      <Iframe {...rest} />
      <Box backgroundColor={'black'} opacity={0.25} zIndex={3} />
    </>
  );
};

export const Iframe: React.FunctionComponent<IframeHTMLAttributes<HTMLIFrameElement>> = ({ title, src, style, ...rest }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <iframe
      loading="eager"
      title={title}
      src={mounted ? src : undefined}
      style={{
        ...style,
      }}
      {...rest}
    />
  );
};
