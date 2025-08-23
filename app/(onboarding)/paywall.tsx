import { useAppDispatch } from "@/store/hooks";
import { completeOnboarding } from "@/store/slices/appSlice";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FeaturesList } from "../../components/ui/FeaturesList";
import { OnboardingButton } from "../../components/ui/OnboardingButton";

export default function Paywall() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">(
    "yearly"
  );

  const handleClose = async () => {
    await dispatch(completeOnboarding());
    router.replace("/(tabs)/home");
  };

  const handleTryFree = async () => {
    await dispatch(completeOnboarding());
    router.replace("/(tabs)/home");
  };

  return (
    <View className="flex-1 bg-[#101e17]">
      {/* Header */}
      <View className="absolute w-full h-28 z-10 flex justify-end items-end pr-5 pb-4">
        <TouchableOpacity
          onPress={handleClose}
          className="w-6 h-6 items-center justify-center bg-black/40 rounded-xl"
        >
          <Text className="text-white font-bold text-center text-base leading-4">
            ×
          </Text>
        </TouchableOpacity>
      </View>

      {/* Background */}
      <View
        className="w-full relative"
        style={{ height: Dimensions.get("screen").height / 1.5 }}
      >
        <ImageBackground
          source={require("../../assets/plantassets/backgroundPaywall.png")}
          className="size-full"
          resizeMode="stretch"
        />
      </View>

      {/* Main Content */}
      <View className="flex-1 mb-3 pb-6 justify-end">
        {/* Title */}
        <View className="mb-5 px-6">
          <Text className="text-white text-3xl font-bold tracking-widest">
            PlantApp <Text className="font-light">Premium</Text>
          </Text>
          <Text className="text-white/70 text-lg font-light tracking-widest">
            Access All Features
          </Text>
        </View>

        {/* Features List */}
        <FeaturesList
          features={[
            {
              id: "1",
              title: "Unlimited",
              subtitle: "Plant Identify",
              icon: "scan",
            },
            {
              id: "2",
              title: "Faster",
              subtitle: "Process",
              icon: "speedometer",
            },
            {
              id: "3",
              title: "Detailed",
              subtitle: "Plant care",
              icon: "leaf",
            },
          ]}
        />

        {/* Premium Options */}
        <View className="mt-6 px-6">
          {/* Monthly Plan */}
          <TouchableOpacity
            onPress={() => setSelectedPlan("monthly")}
            className={`relative w-full h-[60px] mb-6 rounded-2xl flex flex-row items-center px-4 ${
              selectedPlan === "monthly"
                ? "border-[1.5px] border-[#28AF6E] bg-[#28AF6E]/20"
                : "border border-white/30 bg-white/5"
            }`}
          >
            <View className="mr-4">
              <View
                className={`w-6 h-6 rounded-full ${
                  selectedPlan === "monthly"
                    ? "bg-white border-8 border-[#28AF6E]"
                    : "bg-white/10"
                }`}
              />
            </View>
            <View className="flex-1">
              <Text className="text-white text-base font-medium">1 Month</Text>
              <Text className="text-white/70 text-xs">
                $2.99/month, auto renewable
              </Text>
            </View>
          </TouchableOpacity>

          {/* Yearly Plan */}
          <TouchableOpacity
            onPress={() => setSelectedPlan("yearly")}
            className={`relative w-full h-[60px] mb-6 rounded-2xl flex flex-row items-center px-4 ${
              selectedPlan === "yearly"
                ? "border-[1.5px] border-[#28AF6E] bg-[#28AF6E]/10"
                : "border border-white/30 bg-white/5"
            }`}
          >
            {selectedPlan === "yearly" && (
              <View className="absolute top-0 right-0 bg-[#28AF6E] h-7 w-20 rounded-bl-[20px] rounded-tr-[12px] flex items-center justify-center">
                <Text className="text-white text-xs font-medium">Save 50%</Text>
              </View>
            )}
            <View className="mr-4">
              <View
                className={`w-6 h-6 rounded-full ${
                  selectedPlan === "yearly"
                    ? "bg-white border-8 border-[#28AF6E]"
                    : "bg-white/10"
                }`}
              />
            </View>
            <View className="flex-1">
              <Text className="text-white text-base font-medium">1 Year</Text>
              <Text className="text-white/70 text-xs">
                First 3 days free, then $529,99/year
              </Text>
            </View>
          </TouchableOpacity>

          {/* CTA Button */}
          <OnboardingButton
            title="Try free for 3 days"
            onPress={handleTryFree}
          />
        </View>

        {/* Footer */}
        <View className="mt-2 px-6">
          <Text className="text-center font-light text-[9px] leading-3 text-white/60 mb-2.5">
            After the 3-day free trial period you&apos;ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
          <Text className="text-center font-normal text-xs text-white/50">
            Terms • Privacy • Restore
          </Text>
        </View>
      </View>
    </View>
  );
}