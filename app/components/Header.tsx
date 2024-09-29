import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import SearchBar from '@/app/components/SearchBar'
const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.titles}>
        <Text style={headerStyles.sloganTitle}>Hi, plant lover!</Text>
        <Text style={headerStyles.greetingTitle}>Good Afternoon! ⛅</Text>
      </View>
      <SearchBar />
      <Image
        style={headerStyles.bgLeafs}
        source={require('@/assets/images/app/home_screen/header_leafs.png')}
        resizeMode="cover"
      />
    </View>
  );
}
const headerStyles = StyleSheet.create({
  header: {
    position: "relative",
    paddingTop: 3,
    marginBottom: 32,
  },
  bgLeafs: {
    width: "100%",
    height: 175,
    top: -47,
    position: "absolute",
    zIndex: -9,
    backgroundColor: "rgba(246, 246, 246, 0.84)",
    borderColor: "rgba(60, 60, 67, 0.25)",
    borderWidth: 0.2,
  },
  titles: {
    flexDirection: "column",
    gap: 6,
    marginHorizontal: 24,
  },
  sloganTitle: {
    color: "#13231B",
    fontSize: 16,
    lineHeight: 18.96,
    letterSpacing: 0.07,
    fontFamily: "Rubik_400Regular",
  },
  greetingTitle: {
    color: "#13231B",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.35,
    fontFamily: "Rubik_500Medium",
  },
});
export default Header