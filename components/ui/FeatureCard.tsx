import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { FeatureCardProps } from '../../types/feature';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  icon = 'checkmark-circle',
  width = 156,
  height = 130,
}) => {

  return (
    <View
      className="rounded-2xl bg-white/10 p-4 shadow-sm"
      style={{ width, height }}
    >
      {/* Icon */}
      <View className="w-9 h-9 rounded-xl bg-black/20 justify-center items-center mb-6">
        <Ionicons
          name={icon}
          size={20}
          color="rgba(255, 255, 255, 0.9)"
        />
      </View>

      {/* Content */}
      <View className="flex-1 justify-end">
        <Text className="text-white font-semibold text-xl mb-1" numberOfLines={1}>
          {title}
        </Text>
        <Text 
          className="text-white/60 text-sm leading-[18px]" 
          numberOfLines={2}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};
