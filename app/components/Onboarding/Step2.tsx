
import { useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView, ImageBackground } from "react-native";
import BigGreenButton from "../BigGreenButton";
import OnboardingFooter from './OnboardingFooter'
import Pagination from "./Pagination";

const Step2 = () => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require('@/assets/images/app/step2/Background.png')}
      style={styles.background}
      resizeMode="contain"
    >

      <View style={styles.background}>
        {/* StatusBar*/}
        <StatusBar barStyle="dark-content" backgroundColor="#000000" />

        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Header />
            <View style={styles.contentImageWrapper}>
              <Image
                source={require('@/assets/images/app/step2/bg_leafs.png')}
                resizeMode="contain"
                style={styles.bgLeafsImage}
              />
              <Image
                source={require('@/assets/images/app/step2/Artwork.png')}
                resizeMode="contain"
                style={styles.artWorkImage}
              />
              <Image
                source={require('@/assets/images/app/step2/content.png')}
                resizeMode="contain"
                style={styles.phoneScreen}
              />
            </View>

            <OnboardingFooter>
              <BigGreenButton title="Continue" onPress={() => router.push("/components/Paywall/PaywallScreen")} />
              <Pagination totalStep={3} currentStep={1} />
            </OnboardingFooter>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>
      Get plant {' '}
      <View style={styles.highlightContainer}>
        <Text style={styles.highlightText}>care guides</Text>
        <Image source={require('@/assets/images/app/step2/Brush.png')} style={styles.highlightIcon} />
      </View>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FDFFFE",
  },
  contentImageWrapper: {
    position: "relative",
    top: 14,
    width: "100%",
    height: "100%",
  },
  bgLeafsImage: {
    top: 24,
    position: "absolute",
    width: "100%",
    height: 325.4,
    transform: [{ rotate: '73.6deg' }, { scale: 1.2 }],

  },
  phoneScreen: {
    width: "100%",
    height: undefined,
    aspectRatio: 9 / 16,
    bottom: 0,
  },
  artWorkImage: {
    top: -110,
    right: -25,
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: 405,
    transform: [{ scale: 1.5 },{scale:0.8}],

  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    width: 315,
    height: 85,
    left: 24,
    top: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik_500Medium',
    color: '#13231B',
    lineHeight: 33.18,
    letterSpacing: -1
  },
  highlightContainer: {
    alignItems: 'center',
    marginBottom: -3 // Should be fixed but how?
  },
  highlightText: {
    fontFamily: 'Rubik_800ExtraBold',
    fontSize: 28,
    color: '#13231B',
    lineHeight: 28,
    letterSpacing: -1,

  },
  highlightIcon: {
    width: 152,
    height: 13,
    marginTop: 32,
    position: "absolute",
  },
});
export default Step2;
