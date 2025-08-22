import { useQuestions } from '@/hooks/useQuestions';
import { Question } from '@/types/question';
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function QuestionsExample() {
  const { questions, loading, error, refetch } = useQuestions();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text className="mt-2 text-gray-600">Sorular yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-center mb-4">{error}</Text>
        <TouchableOpacity 
          onPress={refetch}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white">Tekrar Dene</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderQuestion = ({ item }: { item: Question }) => (
    <View className="bg-white rounded-lg p-4 m-2 shadow-sm">
      <Image 
        source={{ uri: item.image_uri }} // image.url değil, image_uri
        className="w-full h-32 rounded-lg mb-3"
        resizeMode="cover"
      />
      <Text className="text-lg font-semibold text-gray-800 mb-1">{item.title}</Text>
      <Text className="text-sm text-gray-600 mb-2">{item.subtitle}</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-xs text-gray-400">Sıra: {item.order}</Text>
        <Text className="text-xs text-gray-400">ID: {item.id}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={questions}
        renderItem={renderQuestion}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
