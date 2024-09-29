import { View, StatusBar, StyleSheet,SafeAreaView } from "react-native";
import ClearStorageButton from '@/app/components/Dev/ClearStorageButton'
import Header from '@/app/components/Header'
import Content from '@/app/components/Content'
import TabBar from '@/app/components/TabBar'

const Home = () => {
  return (
    <View >
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Header />
        <Content />
        <TabBar />
        <ClearStorageButton />
      </SafeAreaView>
    </View>
  );
};

export default Home;