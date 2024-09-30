import { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet, SafeAreaView, ActivityIndicator, Text } from "react-native";
import { Redirect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ClearStorageButton from '@/app/components/Dev/ClearStorageButton';
import Header from '@/app/components/Header';
import Content from '@/app/components/Content';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const [allElementsLoaded, setAllElementsLoaded] = useState(false); // Track render state

  const opacity = useSharedValue(0);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const launchedBefore = await AsyncStorage.getItem("alreadyLaunched");
      if (launchedBefore === null) {
        setFirstLaunch(true);
        await AsyncStorage.setItem("alreadyLaunched", "true");
      }
      setLoading(false);
    };
    checkFirstLaunch();
  }, []);

  useEffect(() => {
    if (!loading && allElementsLoaded) {
      opacity.value = withTiming(1, { duration: 1000 });
    }
  }, [loading, allElementsLoaded]);

  const onElementsLoaded = () => {
    setAllElementsLoaded(true);
    console.log("All elements have been rendered!");
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  if (loading) {
    return (
      <View style={homeStyles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (firstLaunch) {
    return <Redirect href="/components/Onboarding/GetStarted" />;
  }

  return (
    <Animated.View style={[homeStyles.container, animatedStyle]} onLayout={onElementsLoaded}>
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Header />
        <Content />
        <ClearStorageButton />
      </SafeAreaView>
    </Animated.View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(251, 250, 250, 1)",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(251, 250, 250, 1)",
  },
});

export default HomeScreen;
