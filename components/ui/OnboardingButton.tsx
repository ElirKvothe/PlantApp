import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface OnboardingButtonProps {
  title: string;
  onPress: () => void;
}

export const OnboardingButton: React.FC<OnboardingButtonProps> = ({
  title,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full py-4 rounded-xl bg-[#28AF6E] active:bg-green-700"
      activeOpacity={0.8}
    >
      <Text className="text-center font-bold text-xl text-white py-1.5">
        {title}
      </Text>
    </TouchableOpacity>
  );
};