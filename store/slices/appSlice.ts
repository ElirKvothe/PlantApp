import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from '../../types/store';

const initialState: AppState = {
  hasCompletedOnboarding: false,
  isLoading: true,
};

// Check if onboarding is completed
export const checkOnboardingStatus = createAsyncThunk(
  'app/checkOnboardingStatus',
  async () => {
    try {
      const hasCompleted = await AsyncStorage.getItem('is_onboarding_completed');
      return hasCompleted === 'true';
    } catch (error) {
      console.log(error)
      return false;
    }
  }
);

// Mark onboarding as completed
export const completeOnboarding = createAsyncThunk(
  'app/completeOnboarding',
  async () => {
    try {
      await AsyncStorage.setItem('is_onboarding_completed', 'true');
      return true;
    } catch (error) {
      throw error;
    }
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action) => {
      state.hasCompletedOnboarding = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkOnboardingStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkOnboardingStatus.fulfilled, (state, action) => {
        state.hasCompletedOnboarding = action.payload;
        state.isLoading = false;
      })
      .addCase(checkOnboardingStatus.rejected, (state) => {
        state.hasCompletedOnboarding = false;
        state.isLoading = false;
      })
      .addCase(completeOnboarding.fulfilled, (state) => {
        state.hasCompletedOnboarding = true;
      });
  },
});

export const { setOnboardingCompleted } = appSlice.actions;