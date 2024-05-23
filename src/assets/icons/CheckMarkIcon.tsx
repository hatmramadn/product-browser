import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CheckMarkIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width || 800}
      height={props.height || 800}
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill={props.color || '#000'}
        fillRule="evenodd"
        d="M21.229 6.604a1 1 0 0 1 0 1.414L10.256 18.99a1 1 0 0 1-1.408.006l-6.185-6.075a1 1 0 0 1-.013-1.414l.7-.714a1 1 0 0 1 1.415-.013l4.771 4.687 9.571-9.572a1 1 0 0 1 1.415 0l.707.708Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CheckMarkIcon;
