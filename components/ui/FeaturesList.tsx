import React from 'react';
import { FlatList, View } from 'react-native';
import { FeatureCard } from './FeatureCard';
import { Feature, FeaturesListProps } from '../../types/feature';

export const FeaturesList: React.FC<FeaturesListProps> = ({
  features,
  horizontal = true,
  showsScrollIndicator = false,
  itemSpacing = 8,
  contentPadding = 20,
  numColumns = 1,
}) => {
  const renderFeature = ({ item }: { item: Feature }) => (
    <FeatureCard
      id={item.id}
      title={item.title}
      subtitle={item.subtitle}
      icon={item.icon}
      width={item.width}
      height={item.height}
    />
  );

  return (
    <View className="w-full">
      <FlatList
        data={features}
        renderItem={renderFeature}
        keyExtractor={(item) => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={horizontal && showsScrollIndicator}
        showsVerticalScrollIndicator={!horizontal && showsScrollIndicator}
        numColumns={horizontal ? 1 : numColumns}
        contentContainerStyle={{
          gap: itemSpacing,
          paddingHorizontal: horizontal ? contentPadding : 0,
          paddingVertical: horizontal ? 0 : contentPadding,
        }}
      />
    </View>
  );
};
