import { View, Text, SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

const DiagnoseScreen = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Text>DiagnoseScreen</Text>
      </SafeAreaView>
    </View>
  )
}

export default DiagnoseScreen