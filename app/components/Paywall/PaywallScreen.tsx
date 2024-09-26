import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const PaywallScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unlock Premium Features!</Text>
      <Button title="Proceed to Home" onPress={() => router.push("/Home")} />
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

export default PaywallScreen;