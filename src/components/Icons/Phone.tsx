import { Icon, IconProps } from '@chakra-ui/react';

export const Phone = (props: IconProps) => {
  return (
    <Icon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="currentColor" />
      <path
        d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061 8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113 3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798 5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298 6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414 18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
        fill="currentColor"
      />
    </Icon>
  );
};
