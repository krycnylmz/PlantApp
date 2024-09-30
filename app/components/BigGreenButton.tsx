import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

interface BigGreenButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>; // Optional style for the button
}

const BigGreenButton: React.FC<BigGreenButtonProps> = ({ title, onPress, style }) => {
  // Shared values for controlling the scale and opacity of the ping animation
  const pingScaleX = useSharedValue(1);
  const pingScaleY = useSharedValue(1);
  const pingOpacity = useSharedValue(1);

  useEffect(() => {
    // Ping animation: repeat the scaling and opacity animation indefinitely
    pingScaleX.value = withRepeat(
      withTiming(1.12, {
        duration: 900,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // Infinite repeat
      false // Reverse after each repeat
    );

    pingScaleY.value = withRepeat(
      withTiming(1.18, {
        duration: 900,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // Infinite repeat
      false // Reverse after each repeat
    );

    pingOpacity.value = withRepeat(
      withTiming(0, {
        duration: 900,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // Infinite repeat
      false // Reverse after each repeat
    );
  }, []);

  // Animated styles for the ping effect
  const animatedPingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scaleX: pingScaleX.value },
        { scaleY: pingScaleY.value } 
      ],
      opacity: pingOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      {/* Ping Effect (Animated Border) */}
      <Animated.View style={[styles.ping, animatedPingStyle]} />
      {/* Button */}
      <TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Required for absolute positioning of the ping effect
  },
  button: {
    width: '100%',
    backgroundColor: '#28AF6E',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2, // Ensure button stays above the ping effect
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.24,
    fontFamily: 'SF-Pro-Text-Bold',
  },
  ping: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 2, // The animated "ping" border
    borderColor: '#28AF6E',
    zIndex: 1, // The ping animation stays behind the button
  },
});

export default BigGreenButton;
