import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const Step1 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 1 of Onboarding</Text>
      <Button title="Continue" onPress={() => router.push("/components/Onboarding/Step2")} />
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

export default Step1;