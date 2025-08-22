import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useQuestions } from '@/hooks/useQuestions';
import { QuestionCard } from './QuestionCard';
import { Question } from '@/types/question';

export const QuestionsList: React.FC = () => {
  const { questions, loading, error, refetch } = useQuestions();

  if (loading) {
    return (
      <View className="h-[164px] justify-center items-center">
        <ActivityIndicator size="small" color="#666" />
        <Text className="mt-2 text-gray-600 text-sm">Sorular yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="h-[164px] justify-center items-center px-4">
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

  const handleQuestionPress = (question: Question) => {
    // Soruya tıklandığında yapılacak işlem
    console.log('Question pressed:', question.title);
    // Buraya navigation ekleyebilirsin
  };

  const renderQuestion = ({ item }: { item: Question }) => (
    <QuestionCard 
      question={item} 
      onPress={() => handleQuestionPress(item)}
    />
  );

  return (
    <View className="w-full">
      <FlatList
        data={questions}
        renderItem={renderQuestion}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
      />
    </View>
  );
};