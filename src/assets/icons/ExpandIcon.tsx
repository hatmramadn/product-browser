import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ExpandIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 1920 1920"
    {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M959.921.01 453 506.933l152.28 152.28 246.946-246.944v1095.475L605.28 1260.798 453 1413.078 959.921 1920l506.921-506.921-152.28-152.281-246.946 246.945V412.268l246.945 246.945 152.281-152.281z"
    />
  </Svg>
);
