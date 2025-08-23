import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { checkOnboardingStatus } from '@/store/slices/appSlice';

export default function Index() {
  const dispatch = useAppDispatch();
  const { hasCompletedOnboarding, isLoading } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(checkOnboardingStatus());
  }, [dispatch]);

  // Show loading while checking onboarding status
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#22c55e" />
      </View>
    );
  }

  // Redirect based on onboarding status
  if (hasCompletedOnboarding) {
    return <Redirect href="/(onboarding)/get-started" />;
  } else {
    return <Redirect href="/(onboarding)/get-started" />;
  }
}