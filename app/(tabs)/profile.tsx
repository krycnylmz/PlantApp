import { View, Text, SafeAreaView,StatusBar } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#130F26" />
      <SafeAreaView>
        <Text>ProfileScreen</Text>
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen