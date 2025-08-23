import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { QuestionCardProps } from '../../types/component';

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View className="w-[240px] h-[164px] rounded-xl overflow-hidden shadow-lg">
        <ImageBackground
          source={{ uri: question.image_uri }}
          className="w-full h-full"
          resizeMode="cover"
        >
          {/* Content Container */}
          <View className="flex-1 justify-end">
            <View className="w-full h-[64px] rounded-lg pt-[11px] pl-[14px] pr-[14px]">
              <Text 
                className="text-white text-base font-medium"
                numberOfLines={2}
              >
                {question.title}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};