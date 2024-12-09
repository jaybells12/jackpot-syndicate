import { Icon, IconProps } from '@chakra-ui/react';

export const Close = (props: IconProps) => {
  return (
    <Icon version="1.1" id="close" x="0px" y="0px" viewBox="0 0 25 25" sx={{ '.st0': { fill: '#FFF' } }} {...props}>
      <polygon
        className="st0"
        points="23.7,2.7 22.3,1.3 12.5,11.1 2.7,1.3 1.3,2.7 11.1,12.5 1.3,22.3 2.7,23.7 12.5,13.9 22.3,23.7 
	23.7,22.3 13.9,12.5 "
      />
    </Icon>
  );
};
