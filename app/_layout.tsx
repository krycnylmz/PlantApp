import React, { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Rubik_400Regular,Rubik_500Medium,Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync(); // Show SplashScreen until fonts are ready

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load rubik font
        await Font.loadAsync({
          Rubik_400Regular,
          Rubik_500Medium,
          Rubik_600SemiBold,
          Rubik_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync(); // Hide SplashScreen when the app is ready
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Show empty screen until app fonts are ready
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
    </View>
  );
}