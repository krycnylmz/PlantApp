import { View, Text, SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

const MyGardenScreen = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Text>MyGardenScreen</Text>
      </SafeAreaView>
    </View>
  )
}

export default MyGardenScreen