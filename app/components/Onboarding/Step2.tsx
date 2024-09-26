import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const Step2 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 2 of Onboarding</Text>
      <Button title="Finish Onboarding" onPress={() => router.push("/components/Paywall/PaywallScreen")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Step2;