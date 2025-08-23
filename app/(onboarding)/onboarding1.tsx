import { OnboardingPagination } from "@/components/ui/OnboardingPagination";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { OnboardingLayout } from "../../components/layout/OnboardingLayout";
import { OnboardingButton } from "../../components/ui/OnboardingButton";
import { images } from "../../constants/images";

export default function Onboarding1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/onboarding2");
  };

  return (
    <OnboardingLayout
      backgroundSource={images.plant.background}
    >
      <View className="flex-1 justify-center">
        {/* Header Section */}
        <View className="mb-3 mt-3 mx-6">
          <View className="relative">
            <Text className="text-4xl font-medium text-gray-900 tracking-tight">
              Take a photo to <Text className="font-extrabold">identify</Text>
              {"\n"} the plant!
            </Text>

            {/* Line Asset */}
              <Image
              source={images.plant.identify} 
              className="absolute mt-8 mr-5 self-end"
                resizeMode="contain"
              />
          </View>
        </View>

        {/* Main Image */}
        <View className="flex-1 items-center mt-3">
          <Image
            source={images.plant.content}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Section */}
        <View className="mx-6 mb-5">
          <OnboardingButton title="Continue" onPress={handleContinue} />
        </View>

        {/* Pagination at the bottom */}
        <View className="mx-6 mb-3">
          <OnboardingPagination totalSteps={3} currentStep={0} />
        </View>
      </View>
    </OnboardingLayout>
  );
}
