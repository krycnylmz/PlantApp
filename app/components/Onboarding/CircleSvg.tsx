import React from 'react';
import Svg, { Circle } from 'react-native-svg';

interface CircleSvgProps {
  fillOpacity?: number;
  size?: number;
  fillColor?: string;
}

const CircleSvg: React.FC<CircleSvgProps> = ({
  fillOpacity = 1, // Varsayılan fill opacity değeri
  size = 7, // Varsayılan boyut (width ve height için)
  fillColor = '#13231B', // Varsayılan dolgu rengi
}) => (
  <Svg width={size} height={size} viewBox="0 0 7 7" fill="none">
    <Circle cx="3.5" cy="3.5" r="3" fill={fillColor} fillOpacity={fillOpacity} />
  </Svg>
);

export default CircleSvg;