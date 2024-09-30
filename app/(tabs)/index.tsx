import { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet,SafeAreaView,ActivityIndicator,Text } from "react-native";
import { Redirect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ClearStorageButton from '@/app/components/Dev/ClearStorageButton'
import Header from '@/app/components/Header';
import Content from '@/app/components/Content';

const HomeScreen = () => {


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
  }

  return (
    <View style={homeStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Header />
        <Content />
        <ClearStorageButton />
      </SafeAreaView>
    </View>
  );
};
// Styles
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "rgba(251, 250, 250, 1)",
  },
})
export default HomeScreen;