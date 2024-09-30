import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux'; // Redux provider'ı import ediyoruz
import { store } from '@/app/redux/store'; // Store'u import ediyoruz

// Prevent auto-hide of the splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Semibold': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SF-Pro-Rounded-Semibold': require('../assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'VisbyCF-ExtraBold': require('../assets/fonts/VisbyCF-ExtraBold.otf'),
    'SF-Pro-Text-Bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
    'Rubik_300Light': require('@expo-google-fonts/rubik/Rubik_300Light.ttf'),
    'Rubik_400Regular': require('@expo-google-fonts/rubik/Rubik_400Regular.ttf'),
    'Rubik_500Medium': require('@expo-google-fonts/rubik/Rubik_500Medium.ttf'),
    'Rubik_600SemiBold': require('@expo-google-fonts/rubik/Rubik_600SemiBold.ttf'),
    'Rubik_700Bold': require('@expo-google-fonts/rubik/Rubik_700Bold.ttf'),
    'Rubik_800ExtraBold': require('@expo-google-fonts/rubik/Rubik_800ExtraBold.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
        setAppIsReady(true); // Mark the app as ready
      }
    };

    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync(); // Hide SplashScreen when the app is ready
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Show empty screen until app fonts are ready
  }

  return (
    // Wrap the app with provider for store
    <Provider store={store}>
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
          {/* <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        /> */}

          {/* Home and Tab Navigation */}
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />
        </Stack>

        {/* <Stack.Screen
          name="components/QuestionScreenWebView"
          options={{ headerShown: false }} // Bu sayfada header'ı gizliyoruz
        /> */}
      </View>
    </Provider>
  );
}
