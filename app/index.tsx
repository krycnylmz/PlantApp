import { Redirect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(false);

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

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (firstLaunch) {
    return <Redirect href="/components/Onboarding/GetStarted" />;
  } else {
    return <Redirect href="/Home" />;
  }
};

export default Index;