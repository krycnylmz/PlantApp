import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientTextsProps {
  gradientColors: string[];
}

const GradientTexts: React.FC<GradientTextsProps> = ({ gradientColors }) => {
  return (
    <MaskedView maskElement={
      <View style={gradientTextsStyles.maskedView}>
        <Text style={gradientTextsStyles.premiumText}>FREE Premium Available</Text>
        <Text style={gradientTextsStyles.upgradeText}>Tap to upgrade your account!</Text>
      </View>
    }>
      {/* Gradient colors */}
      <LinearGradient
        start={{ x: 0.3, y: 0.4 }}
        colors={gradientColors} // Gradient renkleri prop olarak kullanılıyor
        style={{ height: "100%", width: '100%' }} // Gradient stilini ayarla
      />
    </MaskedView>
  );
};

const gradientTextsStyles = StyleSheet.create({
  maskedView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 1,
  },
  premiumText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Bold',
  },
  upgradeText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Rubik_400Regular',
    marginTop: 2, // Üst metin ile arada boşluk bırakır
  },
});

export default GradientTexts;
