import { OnboardingPagination } from "@/components/ui/OnboardingPagination";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { OnboardingLayout } from "../../components/layout/OnboardingLayout";
import { OnboardingButton } from "../../components/ui/OnboardingButton";

export default function Onboarding2() {
  const router = useRouter();

  const handleContinue = () => {
    // Ana sayfaya dön (paywall henüz yok)
    router.push("/(onboarding)/paywall");
  };

  return (
    <OnboardingLayout
      backgroundSource={require("../../assets/plantassets/Background.png")}
    >
      <View className="flex-1 justify-center">
        {/* Header Section */}
        <View className="mt-3 mx-6">
          <View className="relative">
            <Text className="text-4xl font-medium text-gray-900 tracking-tight" style={{ textShadowColor: "gray", textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 6 }}>
              Get plant <Text className="font-extrabold">care guides</Text>
              {"\n"}
            </Text>

            {/* Çizgi Asset'i */}
            <Image
              source={require("../../assets/plantassets/careguides.png")} // Çizgi asset'iniz
              className="absolute mt-9 mr-[68px] self-end scale-[1.1]"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 1,
                shadowRadius: 3,
              }}
            />
          </View>
        </View>

        {/* Main Image */}
        <View className="flex-1 items-center relative">
        <Image
            source={require("../../assets/plantassets/Artwork.png")}
            resizeMode="contain"
            className="absolute z-10 scale-[1.1]"
          />
          <Image
            source={require("../../assets/plantassets/Leafs.png")}
            resizeMode="contain"
            className="-rotate-[1deg] scale-[1.1]"
          />
          <Image
            source={require("../../assets/plantassets/FlatiPhone.png")}
            resizeMode="contain"
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 scale-[1.1]"
          />
          
        </View>

        {/* Bottom Section */}
        <View className="mb-5 mx-6">
          <OnboardingButton title="Continue" onPress={handleContinue} />
        </View>
        <View className="mx-6 mb-3">
          <OnboardingPagination totalSteps={3} currentStep={1} />
        </View>
      </View>
    </OnboardingLayout>
  );
}
