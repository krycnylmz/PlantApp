import { useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView,ImageBackground } from "react-native";
import BigGreenButton from "../BigGreenButton";
import OnboardingFooter from './OnboardingFooter'
import Pagination from "./Pagination";
const Step1 = () => {
  const router = useRouter();

  return (
    <ImageBackground
    source={require('@/assets/images/app/step1/Background.png')}
    style={styles.background}
    resizeMode="contain"
  >
    <View style={styles.background}>
      {/* StatusBar*/}
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <OnboardingFooter>
            <BigGreenButton title="Continue" onPress={() => router.replace("/components/Onboarding/Step2")} />
            <Pagination totalStep={3} currentStep={0}/>
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
      Take a photo to {' '}
      <View style={styles.highlightContainer}>
          <Text style={styles.highlightText}>identify</Text>
          <Image source={require('@/assets/images/app/step1/Brush.png')} style={styles.highlightIcon} />
      </View>{' '}
      {' '}
      the plant!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    width:315,
    height: 85,
    left: 24,
    top: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik_500Medium',
    color: '#13231B',
    lineHeight:33.18,
    letterSpacing:-1
  },
  highlightContainer: {
    alignItems:'center',
    marginBottom:-3 // Should be fixed but how?
  },
  highlightText: {
    fontFamily: 'Rubik_800ExtraBold',
    fontSize: 28,
    color: '#13231B',
    lineHeight:28,
    letterSpacing:-1,

  },
  highlightIcon: {
    width: 136,
    height: 13,
    marginTop: 32,
    position:"absolute",
  },
});
export default Step1;
