import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number,
  height?: number,
  color?: string,
}
const HomeIcon:React.FC<Props> = ({width=25,height=25,color="#BDBDBD"}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
      <Path d="M6.50081 3.04205H18.5085C18.442 2.22912 17.9489 1.78571 17.0384 1.78571H7.96146C7.06041 1.78571 6.55772 2.22912 6.50081 3.04205ZM4.56593 5.71179H20.4434C20.3105 4.83419 19.8553 4.33535 18.8499 4.33535H6.15936C5.15398 4.33535 4.69871 4.83419 4.56593 5.71179ZM5.68513 22.3214H19.3147C21.2875 22.3214 22.3213 21.3238 22.3213 19.4207V10.1182C22.3213 8.21524 21.2875 7.21756 19.3147 7.21756H5.68513C3.70282 7.21756 2.67847 8.206 2.67847 10.1182V19.4207C2.67847 21.3238 3.70282 22.3214 5.68513 22.3214Z" fill={color} />
    </Svg>

  )
}

export default HomeIcon;




