import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { OnboardingLayout } from '../../components/layout/OnboardingLayout';
import { OnboardingButton } from '../../components/ui/OnboardingButton';

export default function Onboarding2() {
  const router = useRouter();

  const handleContinue = () => {
    // Ana sayfaya dön (paywall henüz yok)
    router.push('/');
  };

  return (
    <OnboardingLayout backgroundSource={require('../../assets/plantassets/Background.png')}>
      <View className="flex-1 justify-center items-center">
        {/* Header Section */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
            Get plant care guides
          </Text>
          {/* Underline effect */}
          <View className="w-32 h-1 bg-green-400 rounded-full mx-auto" />
        </View>

        {/* Main Content Image */}
        <View className="flex-1 justify-center items-center mb-8">
          <Image
            source={require('../../assets/plantassets/Content.png')}
            className="w-80 h-96"
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section */}
        <View className="mb-8 w-full">
          <OnboardingButton
            title="Continue"
            onPress={handleContinue}
          />
          
          {/* Page Indicator - 2nd step active */}
          <View className="flex-row justify-center items-center mt-6">
            <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
            <View className="w-2 h-2 bg-green-500 rounded-full mx-1" />
            <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
          </View>
        </View>
      </View>
    </OnboardingLayout>
  );
}