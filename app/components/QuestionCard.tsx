import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

interface QuestionCardProps {
  title: string;
  image_uri: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, image_uri }) => {
  return (
    <TouchableOpacity style={questionCardStyles.container} activeOpacity={0.8} onPress={() => { console.log(title, ' pressed!') }}>
      <Image source={{ uri: image_uri }} style={questionCardStyles.image} resizeMode='cover' />
      <View style={questionCardStyles.textWrapper}>
        <Text
          style={questionCardStyles.text}
          numberOfLines={2} // Limiting the number of lines as 2
          ellipsizeMode="tail" // Adding ... en of the line
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const questionCardStyles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  textWrapper: {
    width: "100%",
    position: "absolute",
    zIndex: 2,
    padding: 14,
    minHeight: 64,
    maxHeight: 68,
    bottom: 0,
  },
  text: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Rubik_400Regular",
    lineHeight: 20,
    letterSpacing: -0.24,
  },
});

export default QuestionCard;
