import { useRouter } from "expo-router";
import { View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, Image, Linking } from "react-native";



const PaywallScreen = () => {
  const router = useRouter();


  const handleOpenURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* StatusBar*/}
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <Image source={require('@/assets/images/app/paywall/plant_image_bg2.png')}
        style={styles.plantImageBg}
        resizeMode="cover"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentWrapper}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>
              <Text style={styles.titleBold}>PlantApp </Text>
              Premium
            </Text>
            <Text style={styles.description}>Access All Features</Text>
          </View>

          {/* Feature Cards */}
          <ScrollView style={styles.features} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

          </ScrollView>

          {/* Purchasing */}
          <View style={styles.purshasingWrapper}>

            {/* Purchasing Options */}
            <View style={styles.purcasingOptions}>

            </View>

            {/* Purchase Button */}

          </View>

          {/* Footer Purchasing explanation */}
          <Text style={styles.footerExplaination}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
          </Text>

          {/* Footer Links */}
          <View style={styles.footerLinks}>
            <Text style={styles.linkText} onPress={() => handleOpenURL("https://www.example.com/terms")}>Terms</Text>
            {/* Seperator */}
            <Text style={styles.linkText}>•</Text>
            <Text style={styles.linkText} onPress={() => handleOpenURL("https://www.example.com/privacy")}>Privacy</Text>
            {/* Seperator */}
            <Text style={styles.linkText}>•</Text>
            <Text style={styles.linkText} onPress={() => handleOpenURL("https://www.example.com/restore")}>Restore</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#101E17",
    paddingHorizontal: 24
  },
  plantImageBg: {
    width: 378,
    height: 571,
    position: "absolute"
  },
  safeArea: {
    flex: 1,
    width: "100%",
  },
  contentWrapper: {
    top: 264,

  },
  header: {

  },
  title: {
    color: "#FFFFFF",
    fontFamily: 'Rubik_300Light',
    fontSize: 27,
    lineHeight: 32,
  },
  titleBold: {
    color: "#FFFFFF",
    fontFamily: 'Rubik_700Bold',
    fontSize: 24,
    lineHeight: 28.44,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Rubik_300Light',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  features: {
    height: 130,
    marginTop: 20,
    marginHorizontal: -24,
  },
  scrollContainer: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  purshasingWrapper: {
    gap: 26,
  },
  purcasingOptions: {
    marginTop: 24,
    gap: 16
  },
  // header:{
  // },
  button: {
    width: '100%',
    backgroundColor: '#28AF6E',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.24,
    fontFamily: 'Rubik_500Medium',
  },
  footerExplaination: { 
    fontFamily: 'Rubik_300Light',
    color: 'rgba(255, 255, 255, 0.52)',
    fontSize: 9,
    lineHeight: 11.88,
    textAlign: "center",
    marginTop: 8,
  },
  footerLinks: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    marginTop: 10,
  },
  linkText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Rubik_400Regular',
    fontSize: 11,
    lineHeight: 13.04
  },

});

export default PaywallScreen;