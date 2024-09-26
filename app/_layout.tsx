import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="components/Onboarding/GetStarted"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="components/Onboarding/Step1"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="components/Onboarding/Step2"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="components/Paywall/PaywallScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
