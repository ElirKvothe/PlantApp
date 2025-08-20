import React from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  backgroundSource: any;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  backgroundSource
}) => {
  return (
    <ImageBackground
      source={backgroundSource}
      className="flex-1"
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView className="flex-1">
          {children}
      </SafeAreaView>
    </ImageBackground>
  );
};