import { View, StatusBar, StyleSheet,SafeAreaView } from "react-native";
import ClearStorageButton from '@/app/components/Dev/ClearStorageButton'
import Header from '@/app/components/Header'
import Content from '@/app/components/Content'

const HomeScreen = () => {
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