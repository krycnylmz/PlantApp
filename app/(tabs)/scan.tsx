import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const ScanScreen = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Text>ScanScreen</Text>
      </SafeAreaView>
    </View>
  )
}

export default ScanScreen