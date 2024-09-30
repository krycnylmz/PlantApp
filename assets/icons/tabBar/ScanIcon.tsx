import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
interface Props {
  width: number,
  height: number,
  color?: string,
}
const ScanIcon: React.FC<Props> = ({ width = 25, height = 25, color = "white" }) => {
  return (
    <LinearGradient start={{ x: 0, y: 0.7 }}
      colors={['#28AF6E', '#2CCC80']}
      style={ScanIconStyles.container}>

      <Svg width={width} height={height} viewBox="0 0 74 50" fill="none" style={ScanIconStyles.icon}>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M32.7877 7.78571C33.2341 7.78571 33.5966 8.15061 33.5966 8.60112C33.5966 9.05056 33.2352 9.41547 32.7877 9.41547L31.0562 9.41654C29.6191 9.41868 28.4499 10.5969 28.4499 12.0447V14.0736C28.4499 14.5231 28.0864 14.889 27.64 14.889C27.1935 14.889 26.8311 14.5231 26.8311 14.0736V12.0447C26.8311 9.69904 28.7263 7.78892 31.0552 7.78678L32.7867 7.78571H32.7877ZM40.412 7.78599H42.1052C44.4404 7.78599 46.3388 9.69719 46.3388 12.0482V14.0739C46.3388 14.5233 45.9774 14.8893 45.5299 14.8893C45.0835 14.8893 44.7211 14.5233 44.7211 14.0739V12.0482C44.7211 10.5961 43.5476 9.41468 42.1052 9.41468H40.412C39.9655 9.41468 39.6031 9.05085 39.6031 8.60141C39.6031 8.1509 39.9655 7.78599 40.412 7.78599ZM39.5212 11.87H33.6496C32.3061 11.8839 31.2261 12.9893 31.2378 14.343V15.702C31.241 15.8604 31.3675 15.9899 31.5248 15.9952H41.6439C41.8023 15.9909 41.9287 15.8615 41.9341 15.702V14.343C41.9351 13.6892 41.6843 13.061 41.2315 12.5934C40.7818 12.13 40.1643 11.87 39.5212 11.87ZM25.7028 17.6521H47.4683C47.9147 17.6521 48.2772 18.017 48.2772 18.4675C48.2772 18.917 47.9147 19.2808 47.4683 19.2808H46.3395V23.1653C46.3395 25.5174 44.44 27.4286 42.1058 27.4286H40.4126C39.9651 27.4286 39.6026 27.0636 39.6026 26.6131C39.6026 26.1637 39.9651 25.7988 40.4126 25.7988H42.1058C43.5482 25.7988 44.7217 24.6185 44.7217 23.1653V19.2808H41.9336V20.3627C41.9443 21.7164 40.8654 22.8228 39.5208 22.8357H33.6492C32.3057 22.8228 31.2268 21.7164 31.2374 20.3627V19.2808H28.4494V23.1696C28.4494 24.6174 29.6197 25.7956 31.0578 25.7977L32.7882 25.7988C33.2347 25.7988 33.5971 26.1637 33.5971 26.6131C33.5961 27.0636 33.2347 27.4286 32.7872 27.4286L31.0557 27.4275C28.7268 27.4253 26.8305 25.5152 26.8305 23.1696V19.2808H25.7028C25.2563 19.2808 24.8928 18.917 24.8928 18.4675C24.8928 18.017 25.2563 17.6521 25.7028 17.6521Z" fill={color} />
      </Svg>
    </LinearGradient>

  )
}

const ScanIconStyles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    backgroundColor: "red",
    borderRadius: 64,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.24)",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -20,
  },
  icon: {
    top: 6
  }
})
export default ScanIcon;




