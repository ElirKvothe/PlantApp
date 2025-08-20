import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { OnboardingLayout } from '../../components/layout/OnboardingLayout';
import { OnboardingButton } from '../../components/ui/OnboardingButton';

export default function Onboarding1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/onboarding2');
  };

  return (
    <OnboardingLayout backgroundSource={require('../../assets/plantassets/Background.png')}>
      <View className="flex-1 justify-center items-center">
        {/* Header Section */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
            Take a photo to identify{'\n'}the plant!
          </Text>
          {/* Underline effect */}
          <View className="w-32 h-1 bg-green-400 rounded-full mx-auto" />
        </View>

        {/* Main Content - Phone mockup with camera */}
        <View className="flex-1 justify-center items-center mb-8">
          {/* Bu görseli henüz assets'te görmüyorum, placeholder kullanıyorum */}
          <View className="w-80 h-96 bg-gray-200 rounded-3xl justify-center items-center">
            <Text className="text-gray-500">Camera Phone Mockup</Text>
            <Text className="text-gray-400 text-sm mt-2">Photo identify görseli</Text>
          </View>
        </View>

        {/* Bottom Section */}
        <View className="mb-8 w-full">
          <OnboardingButton
            title="Continue"
            onPress={handleContinue}
          />
          
          {/* Page Indicator - 1st step active */}
          <View className="flex-row justify-center items-center mt-6">
            <View className="w-2 h-2 bg-green-500 rounded-full mx-1" />
            <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
            <View className="w-2 h-2 bg-gray-300 rounded-full mx-1" />
          </View>
        </View>
      </View>
    </OnboardingLayout>
  );
}