import { useLocalSearchParams, useNavigation } from 'expo-router';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Geri ikonu için

const QuestionScreenWebView = () => {
  const { uri } = useLocalSearchParams();
  const navigation = useNavigation();

  // Hide header and other settings
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerBackTitleVisible: false,
      headerTintColor: "#000000",
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 5 }} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#28AF6E" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // URI'nin string olduğunu garanti ediyoruz
  const validUri = Array.isArray(uri) ? uri[0] : uri;

  return (
    <WebView
      style={styles.container}
      source={{ uri: validUri }} // URI'yi burada kullanıyoruz
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"red"
    // marginTop: Constants.statusBarHeight,
  },
});

export default QuestionScreenWebView;
