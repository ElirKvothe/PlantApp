import { CategoriesList } from "@/components/ui/CategoryList";
import { QuestionsList } from "@/components/ui/QuestionList";
import { useAppDispatch } from "@/store/hooks";
import { fetchCategories } from "@/store/slices/plantSlice";
import { fetchQuestions } from "@/store/slices/questionSlice";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import MessageIcon from "../../components/ui/MessageIcon";
import { images } from "../../constants/images";

export default function Home() {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  // Load data when component mounts
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <View className="flex-1 bg-[#FBFAFA]">
      {/* Fixed Header - Background + Home Text */}
      <View
        className="w-full relative"
        style={{ height: Dimensions.get("screen").height / 4.64 }}
      >
        <ImageBackground
          source={images.plant.homeBackground}
          className="size-full"
          resizeMode="stretch"
        />
        {/* HOME Text Overlay */}
        <View className="absolute inset-0 justify-center mx-6 mt-[50px]">
          <Text className="text-black text-lg">
            Hi, plant lover!
          </Text>
          <Text className="text-black font-bold text-2xl leading-7 mt-1 tracking-wider">
            Good Afternoon! ⛅
          </Text>
          
          {/* Search Input with Icon */}
          <View className="bg-white opacity-90 h-[44px] w-full rounded-xl my-[14px] px-4 flex-row items-center shadow-sm">
            <Ionicons
              name="search"
              size={20}
              color="#666"
              className="mr-3"
            />
            <TextInput
              placeholder="Search for plants..."
              placeholderTextColor="#666"
              className="flex-1 text-black text-base"
              textAlignVertical="center"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // 20'den 100'e çıkarıyoruz
      >
        {/* Free Premium Button */}
        <View className="flex-row items-center m-6 h-[64px] bg-black rounded-xl">
          {/* Left Icon */}
          <View className="pl-3" >
            <MessageIcon width={48} height={40} />
          </View>
          
          {/* Center Text */}
          <View className="flex-1 pl-4">
            <Text className="font-bold leading-5 tracking-tight"
            style={{
              color: 'linear-gradient(269.12deg, rgba(255, 222, 156, 0.8) 49.24%, rgba(245, 194, 91, 0.8) 112.17%)'
            }}>
              FREE Premium Available
            </Text>
            <Text className=" text-sm"
            style={{
              color: 'linear-gradient(269.12deg, rgba(255, 222, 156, 0.8) 49.24%, rgba(245, 194, 91, 0.8) 112.17%)'
            }} >
              Tap to upgrade your account!
            </Text>
          </View>
          
          {/* Right Arrow Icon */}
          <View className="pr-3">
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#F0D399"
            />
          </View>
        </View>

        {/* Get Started Section */ }
        <View className="mb-6">
          <Text className="mx-6 font-medium text-lg leading-5 mb-4">Get Started</Text>
          <QuestionsList />
        </View>

        {/* Categories Section */} 
        <View>
          <Text className="font-medium text-lg leading-5 mx-6 mb-4">Categories</Text>
          <CategoriesList />
        </View>
      </ScrollView>
    </View>
  );
}