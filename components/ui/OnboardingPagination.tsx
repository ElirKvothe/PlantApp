import React from 'react';
import { View } from 'react-native';
import { OnboardingPaginationProps } from '../../types/component';

export const OnboardingPagination: React.FC<OnboardingPaginationProps> = ({
  totalSteps,
  currentStep,
  activeColor = 'bg-black',
  inactiveColor = 'bg-black opacity-30'
}) => {
  return (
    <View className="flex-row justify-center items-center mt-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          className={`${
            index === currentStep 
              ? `w-3 h-3 ${activeColor}` 
              : `w-2 h-2 ${inactiveColor}`
          } rounded-full mx-1`}
        />
      ))}
    </View>
  );
};