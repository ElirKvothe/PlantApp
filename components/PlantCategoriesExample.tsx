import { usePlantCategories } from '@/hooks/usePlantCategories';
import { PlantCategory } from '@/types/plant';
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function PlantCategoriesExample() {
  const { categories, loading, error, refetch } = usePlantCategories();

  if (loading) {
    return (
      <View className="flex-1  justify-center items-center">
        <ActivityIndicator size="large" />
        <Text className="mt-2 text-gray-600">Kategoriler yükleniyor...</Text>
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

  const renderCategory = ({ item }: { item: PlantCategory }) => (
    <View className="bg-white rounded-lg p-4 m-2 shadow-sm">
      <Image 
        source={{ uri: item.image?.url || '' }}
        className="w-16 h-16 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
      <Text className="text-sm text-gray-500">Rank: {item.rank}</Text>
      <Text className="text-xs text-gray-400 mt-1">{item.name}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
