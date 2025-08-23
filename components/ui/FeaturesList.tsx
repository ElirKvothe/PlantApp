import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
}

interface FeaturesListProps {
  features: Feature[];
}

export const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  // İkon tipini belirle
  const getIconName = (title: string): keyof typeof Ionicons.glyphMap => {
    switch (title) {
      case 'Unlimited':
        return 'scan';
      case 'Faster':
        return 'speedometer';
      case 'Detailed':
        return 'leaf';
      default:
        return 'help-circle';
    }
  };

  const renderFeature = ({ item }: { item: Feature }) => (
    <View
      className="w-[156px] h-[130px] rounded-[14px] relative bg-white/10 shadow-lg"
    >
      {/* Icon Container */}
      <View
        className="w-9 h-9 rounded-lg bg-black/30 ml-4 mt-4 justify-center items-center"
      >
        <Ionicons
          name={getIconName(item.title)}
          size={18}
          color="rgba(255, 255, 255, 0.8)"
        />
      </View>

      {/* Text Container */}
      <View
        className="absolute flex flex-col items-start gap-1"
        style={{
          width:
            item.title === 'Unlimited'
              ? 97
              : item.title === 'Faster'
              ? 64
              : 83,
          height: 46,
          left: 16,
          top: 68,
        }}
      >
        <Text
          className="text-white font-medium text-xl leading-6 tracking-wide"
          style={{
            width:
              item.title === 'Unlimited'
                ? 97
                : item.title === 'Faster'
                ? 64
                : 83,
            height: 24,
          }}
        >
          {item.title}
        </Text>
        <Text
          className="text-white/70 font-normal text-sm leading-[18px]"
          style={{
            width:
              item.subtitle === 'Plant Identify'
                ? 81
                : item.subtitle === 'Process'
                ? 48
                : 61,
            height: 18,
            letterSpacing: -0.08,
          }}
        >
          {item.subtitle}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="w-full">
      <FlatList
        data={features}
        renderItem={renderFeature}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingHorizontal: 20 }}
      />
    </View>
  );
};
