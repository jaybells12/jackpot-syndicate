import { Icon, IconProps } from '@chakra-ui/react';

export const Email = (props: IconProps) => {
  return (
    <Icon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
    </Icon>
  );
};
