import { usePlantCategories } from '@/hooks/usePlantCategories';
import { PlantCategory } from '@/types/plant';
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { CategoryCard } from './CategoryCard';

export const CategoriesList: React.FC = () => {
  const { categories, loading, error, refetch } = usePlantCategories();

  if (loading) {
    return (
      <View className="h-[200px] justify-center items-center">
        <ActivityIndicator size="small" color="#666" />
        <Text className="mt-2 text-gray-600 text-sm">Kategoriler yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="h-[200px] justify-center items-center px-4">
        <Text className="text-red-500 text-center mb-3 text-sm">{error}</Text>
        <TouchableOpacity 
          onPress={refetch}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          <Text className="text-white text-sm">Tekrar Dene</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderCategory = ({ item }: { item: PlantCategory }) => (
    <CategoryCard 
      category={item} 
      onPress={() => console.log('Category pressed:', item.title)}
    />
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      scrollEnabled={false} // Bu satır ScrollView uyumluluğu sağlıyor
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ 
        paddingHorizontal: 24,
        paddingBottom: 20,
        gap: 16
      }}
      columnWrapperStyle={{ 
        gap: 11
      }}
    />
  );
};