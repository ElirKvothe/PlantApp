import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { CategoryCardProps } from '../../types/component';

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.8} 
      className='w-[48%]'
    >
      <View className="h-[152px] rounded-xl overflow-hidden shadow-lg border-[0.5px] border-gray-300">
        <ImageBackground
          source={{ uri: category.image?.url || '' }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <View className="m-4 flex-1 justify-start">
            <Text 
              className="text-gray-800 w-[90px] leading-4"
            >
              {category.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};