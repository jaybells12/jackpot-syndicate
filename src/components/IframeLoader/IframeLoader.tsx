import { Box } from '@chakra-ui/react'
import React, { IframeHTMLAttributes } from 'react'

type IframeFacadeProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  Facade: React.FunctionComponent
}

export const IframeFacade: React.FunctionComponent<IframeFacadeProps> = ({
  Facade,
  ...rest
}) => {
  return (
    <>
      <Facade />
      <Iframe {...rest} />
      <Box
        backgroundColor={'black'}
        opacity={0.25}
        zIndex={3}
      />
    </>
  )
}

export const Iframe: React.FunctionComponent<
  IframeHTMLAttributes<HTMLIFrameElement>
> = ({ title, src, style, ...rest }) => {
  return (
    <iframe
      loading='eager'
      title={title}
      src={src}
      style={{
        ...style,
      }}
      {...rest}
    />
  )
}
