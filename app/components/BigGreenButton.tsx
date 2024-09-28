import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle, TextStyle, View } from 'react-native';

interface BigGreenButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>; //Optional Style for TouchableOpacity
}

const BigGreenButton: React.FC<BigGreenButtonProps> = ({ title, onPress, style }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#28AF6E',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.24,
    fontFamily: 'Rubik_500Medium',
  } as TextStyle, // Explicitly declare the type for TextStyle
});

export default BigGreenButton;