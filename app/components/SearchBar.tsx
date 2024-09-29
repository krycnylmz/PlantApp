import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';

interface SearchBarProps{
  placeHolder?:string
}
const SearchBar:React.FC<SearchBarProps> = ({placeHolder="Search for plants"}) => {
  return (
    <View style={searchBarStyles.Wrapper}>
      <BlurView intensity={5}>
        <TouchableOpacity style={searchBarStyles.Input} activeOpacity={0.8}>
          <Image
            source={require('@/assets/images/app/home_screen/searchIcon.png')}
            style={searchBarStyles.searchIcon}
            resizeMode="contain"
          />
          <Text style={searchBarStyles.searchText}>{placeHolder}</Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
}

const searchBarStyles = StyleSheet.create({
    Wrapper: {
    paddingHorizontal: 24,
    width: "100%",
    top: 14,
  },
  Input: {
    height: 44,
    paddingHorizontal: 18,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderWidth: 0.2,
    borderColor: "rgba(60, 60, 67, 0.25)",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    fontSize: 15.5,
    fontFamily: "Rubik_400Regular",
    color: "rgba(175, 175, 175, 1)",
    lineHeight: 18.37,
    letterSpacing: 0.07,
    marginLeft:12
  },
});

export default SearchBar