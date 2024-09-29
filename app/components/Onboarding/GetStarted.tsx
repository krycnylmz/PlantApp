import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, ImageBackground, SafeAreaView, Linking, StatusBar } from 'react-native';
import BigGreenButton from '../BigGreenButton';
import OnboardingFooter from './OnboardingFooter'

const GetStarted = () => {
  const router = useRouter();

  const handleOpenURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('@/assets/images/app/get_started/bg.png')}
      style={styles.background}
      resizeMode="contain"
    >
      {/* StatusBar*/}
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />
          <OnboardingFooter>
            <BigGreenButton
              title="Get Started"
              onPress={() => router.replace('/components/Onboarding/Step1')}
            />

            <Footer
              onPressTerms={() => handleOpenURL('https://example.com/terms')}
              onPressPrivacy={() => handleOpenURL('https://example.com/privacy')}
            />
          </OnboardingFooter>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>
      Welcome to <Text style={styles.titleBold}>PlantApp</Text>
    </Text>
    <Text style={styles.description}>
      Identify more than 3000+ plants with 88% accuracy.
    </Text>
  </View>
);

interface FooterProps {
  onPressTerms: () => void;
  onPressPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPressTerms, onPressPrivacy }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>
      By tapping next, you are agreeing to PlantID{' '}
      <Text style={styles.linkText} onPress={onPressTerms}>
        Terms of Use
      </Text>{' '}
      &{' '}
      <Text style={styles.linkText} onPress={onPressPrivacy}>
        Privacy Policy
      </Text>.
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
    width: 300,
    height: 85,
    left: 24,
    top: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Rubik_400Regular',
    color: '#13231B',
  },
  titleBold: {
    fontFamily: 'Rubik_600SemiBold',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Rubik_400Regular',
    color: 'rgba(19, 35, 27, 0.7)',
  },
  footer: {
    width: '100%',
    alignItems: 'center'
  },
  footerText: {
    width: 232,
    marginTop: 17,
    fontFamily: 'Rubik_400Regular',
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
  },
  linkText: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.07,
    color: 'rgba(89, 113, 101, 0.7)',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default GetStarted;