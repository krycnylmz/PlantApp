import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import GradientTexts from './GradientTexts';

const PremiumBox = () => {
  const router = useRouter();
  const gradientColors = ['#E5C990', '#E4B046'];

  const handleOnpress = () => {
    router.replace('/components/Paywall/PaywallScreen');
  }

  return (
    <TouchableOpacity style={premiumBoxStyles.premiumBox} activeOpacity={0.8} onPress={handleOnpress}>
      <Image
        source={require('@/assets/images/app/home_screen/premium_icon_mail.png')}
        style={premiumBoxStyles.premiumIcon}
      />
      <View style={premiumBoxStyles.premiumTextsWrapper}>
        <GradientTexts gradientColors={gradientColors} />
      </View>
      <Image
        source={require('@/assets/images/app/home_screen/right_arrow_icon.png')}
        style={premiumBoxStyles.arrow}
      />
    </TouchableOpacity>
  );
};

const premiumBoxStyles = StyleSheet.create({
  premiumBox: {
    height: 64,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#24201A',
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 24,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Yalnızca alta gölge verir
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Android shadow
    elevation: 7,
  },
  premiumTextsWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', // Textleri ortalar
  },
  premiumIcon: {
    width: 32,
    height: 24,
  },

  arrow: {
    position: "absolute",
    right: 12,
    width: 24,
    height: 24,
  }
});

export default PremiumBox;
