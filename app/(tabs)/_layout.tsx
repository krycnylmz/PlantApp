import React from 'react';
import { Tabs } from 'expo-router';
import HomeIcon from '@/assets/icons/tabBar/HomeIcon';
import ProfileIcon from '@/assets/icons/tabBar/ProfileIcon';
import MyGardenIcon from '@/assets/icons/tabBar/MyGardenIcon';
import ScanIcon from '@/assets/icons/tabBar/ScanIcon';
import DiagnoseIcon from '@/assets/icons/tabBar/DiagnoseIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.92)',
          height: 88,
          borderTopWidth: 0.5, 
          borderColor: "rgba(19, 35, 27, 0.1)"
        },
        tabBarActiveTintColor: '#28AF6E', 
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Rubik_400Regular',
          marginBottom: 5,
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeIcon width={25} height={25} color={focused ? '#28AF6E' : '#BDBDBD'} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          tabBarLabel: 'Diagnose',
          tabBarIcon: ({ focused }) => (
            <DiagnoseIcon width={25} height={25} color={focused ? '#28AF6E' : '#BDBDBD'} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <ScanIcon width={74} height={50} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-garden"
        options={{
          tabBarLabel: 'My Garden',
          tabBarIcon: ({ focused }) => (
            <MyGardenIcon width={25} height={25} color={focused ? '#28AF6E' : '#BDBDBD'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon width={25} height={25} color={focused ? '#28AF6E' : '#BDBDBD'} />
          ),
        }}
      />
    </Tabs>
  );
}
