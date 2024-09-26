import React from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClearStorageButton = () => {
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Success", "AsyncStorage has been cleared.");
    } catch (error) {
      Alert.alert("Error", "Failed to clear AsyncStorage.");
    }
  };

  if (!__DEV__) {
    // If app on production, this component won't be visiable and useable
    return null;
  }

  return (
    <View>
      <Button title="Clear AsyncStorage (Dev Only)" onPress={clearAsyncStorage} />
    </View>
  );
};

export default ClearStorageButton;