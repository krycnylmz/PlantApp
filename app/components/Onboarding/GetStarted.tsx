import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const GetStarted = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Get Started" onPress={() => router.push("/components/Onboarding/Step1")} />
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

export default GetStarted;