import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';

export default function ScanButton() {
  return (
    <View className="items-center justify-center">
      <LinearGradient
        colors={['#28AF6E', '#2CCC80']}
        start={{ x: 0.16, y: 0.16 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          borderWidth: 4,
          borderColor: 'rgba(255, 255, 255, 0.24)',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -15,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <AntDesign 
          name="scan1" 
          size={25} 
          color="#FFFFFF" 
        />
      </LinearGradient>
    </View>
  );
}