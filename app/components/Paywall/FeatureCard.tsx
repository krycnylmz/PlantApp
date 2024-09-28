import { View, Text, StyleSheet, Image,ViewStyle } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';

interface FeatureCardProps {
  title: string,
  description: string,
  icon: any,
  style?: ViewStyle; // This prop is optional
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon,style }) => {
  return (
    <View style={[styles.featureCard, style]}> 
      <BlurView intensity={16} style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
        <View style={styles.textsWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </BlurView>
    </View>


  )
}


const styles = StyleSheet.create({
  featureCard: {
    width: 156,
    height: 130,
    borderRadius: 14,
    overflow:"hidden",
    marginRight: 8,
  },
  wrapper: {
    // flex: 1,
    width: 156,
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16
  },
  iconContainer: {
    width: 36,
    height: 35.68,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    transform: [{ scale: 0.5 }]
  },
  textsWrapper: {
    marginTop: 16,
    flex: 1,
    flexDirection: "column",
    gap: 4
  },
  title: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Rubik_500Medium",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  description: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Rubik_400Regular",
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
})
export default FeatureCard