import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

interface CategoryCardProps {
  title: string
}

const gradientColors = ['rgba(255, 255, 255, 1)', 'rgba(249, 255, 250, 1)']

const CategoryCard: React.FC<CategoryCardProps> = ({ title }) => {
  return (
    <TouchableOpacity style={categoryCardStyles.container} onPress={()=>{console.log("pressed ",title)}}>
      <Text style={categoryCardStyles.title}>{title}</Text>
      <Image style={categoryCardStyles.image} source={require('@/assets/images/dev/categoryCardExampleImage.png')} />
      {/* Gradient background */}
      <LinearGradient
        start={{ x: 0, y: 1 }}
        colors={gradientColors}
        style={categoryCardStyles.gradientBg}
      />
    </TouchableOpacity>
  )
}

const categoryCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(249, 255, 250, 1)", 
    width: 158,
    height: 152,
    overflow: "hidden",
    borderRadius: 23,
    borderWidth: 0.5,
    borderColor: "rgba(60, 60, 67, 0.1)",
    padding: 17,
    position: "relative",
    flex:1
  },
  title: {
    color: "rgba(19, 35, 27, 1)",
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    zIndex:3
  },
  image: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    right: 0,
  },
  gradientBg:{
    width: 158,
    height: 152,
    position: "absolute",
    zIndex:1
  }
})

export default CategoryCard