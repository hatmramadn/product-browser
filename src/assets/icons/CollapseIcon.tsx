import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CollapseIcon = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16" {...props}>
    <Path
      fill={props.color}
      d="m8 8 2.707 2.707a1 1 0 0 1-1.414 1.414L9 11.828V15a1 1 0 1 1-2 0v-3.172l-.293.293a1 1 0 0 1-1.414-1.414L8 8Zm0-8a1 1 0 0 1 1 1v3.172l.293-.293a1 1 0 0 1 1.414 1.414L8 8 5.293 5.293a1 1 0 0 1 1.414-1.414L7 4.172V1a1 1 0 0 1 1-1Z"
    />
  </Svg>
);
