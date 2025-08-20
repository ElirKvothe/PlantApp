import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { OnboardingLayout } from '../../components/layout/OnboardingLayout';
import { OnboardingButton } from '../../components/ui/OnboardingButton';

export default function GetStarted() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/onboarding1');
  };

  return (
    <OnboardingLayout backgroundSource={require('../../assets/plantassets/Background.png')}>
      <View className="flex-1 justify-center">
        {/* Header Section */}
        <View className="mb-8 mt-3 ml-6">
          <Text className="text-4xl text-gray-900 mb-2">
            Welcome to <Text className='font-bold'>PlantApp</Text>
          </Text>
          <Text className="text-xl text-gray-600 leading-snug tracking-wide">
            Identify more than 3000+ plants and{'\n'}88% accuracy.
          </Text>
        </View>

        {/* Main Image */}
        <View className="flex-1 justify-center items-center">
          <Image
            source={require('../../assets/plantassets/Frame 13.png')}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section */}
        <View className="mb-8 mx-2">
          <OnboardingButton
            title="Get Started"
            onPress={handleGetStarted}
          />
          
          {/* Terms and Privacy */}
          <Text className="text-sm text-[#597165B2] text-center mt-5 px-6">
            By tapping next, you are agreeing to PlantID{'\n'}
            <Text className="underline">Terms of Use</Text> & <Text className="underline">Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </OnboardingLayout>
  );
}