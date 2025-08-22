import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';
import ScanButton from '../../components/ui/ScanButton';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#979798',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 107,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          paddingTop: 0,
          paddingBottom: Platform.OS === 'ios' ? 34 : 8,
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarBackground: () => (
          <BlurView 
            intensity={Platform.OS === 'ios' ? 80 : 100} 
            tint="light"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.95)',
            }}
          >
            {/* Top divider */}
            <View 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 0.5,
                backgroundColor: 'rgba(19, 35, 27, 0.1)',
              }}
            />
            {/* iOS Home Indicator */}
            {Platform.OS === 'ios' && (
              <View 
                style={{
                  position: 'absolute',
                  bottom: 8,
                  left: '50%',
                  marginLeft: -67.5,
                  width: 135,
                  height: 5,
                  backgroundColor: '#000000',
                  borderRadius: 100,
                }}
              />
            )}
          </BlurView>
        ),
        tabBarLabelStyle: {
          fontFamily: 'Rubik',
          fontSize: 10,
          lineHeight: 12,
          letterSpacing: -0.24,
          marginTop: 4,
          marginBottom: 0,
        },
        tabBarItemStyle: {
          height: 49,
          paddingTop: 6,
        },
      }}>
      
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons 
              name="home" 
              size={25} 
              color={focused ? '#28AF6E' : '#BDBDBD'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="diagnose"
        options={{
          title: 'Diagnose',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons 
              name="local-hospital" 
              size={25} 
              color={focused ? '#28AF6E' : '#BDBDBD'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="scan"
        options={{
          title: '',
          tabBarIcon: () => <ScanButton />,
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
      />
      
      <Tabs.Screen
        name="my-garden"
        options={{
          title: 'My Garden',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name="flower" 
              size={25} 
              color={focused ? '#28AF6E' : '#BDBDBD'} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name="person" 
              size={25} 
              color={focused ? '#28AF6E' : '#BDBDBD'} 
            />
          ),
        }}
      />
      
    </Tabs>
  );
}