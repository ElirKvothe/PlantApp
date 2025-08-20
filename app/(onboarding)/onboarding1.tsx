import { OnboardingPagination } from "@/components/ui/OnboardingPagination";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { OnboardingLayout } from "../../components/layout/OnboardingLayout";
import { OnboardingButton } from "../../components/ui/OnboardingButton";

export default function Onboarding1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/onboarding2");
  };

  return (
    <OnboardingLayout
      backgroundSource={require("../../assets/plantassets/Background.png")}
    >
      <View className="flex-1 justify-center">
        {/* Header Section */}
        <View className="mb-8 mt-3 mx-6">
          <View className="relative">
            <Text className="text-4xl font-medium text-gray-900 tracking-tight">
              Take a photo to <Text className="font-extrabold">identify</Text>
              {"\n"} the plant!
            </Text>

            {/* Çizgi Asset'i */}
            <Image
              source={require("../../assets/plantassets/identify.png")} // Çizgi asset'iniz
              className="absolute"
              style={{
                top: 32,
                left: 200,
              }}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Main Image */}
        <View className="flex-1 items-center">
          <Image
            source={require("../../assets/plantassets/Content.png")}
            resizeMode="contain"
            className="scale-[1.1]"
          />
        </View>

        {/* Bottom Section */}
        <View className="mb-10 mx-6">
          <OnboardingButton title="Continue" onPress={handleContinue} />

          {/*  */}
          <OnboardingPagination totalSteps={3} currentStep={0} />
        </View>
      </View>
    </OnboardingLayout>
  );
}
