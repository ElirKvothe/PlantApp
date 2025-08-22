import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Question } from '@/types/question';
import { api } from '@/utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface QuestionState {
  questions: Question[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
  lastFetched: null,
};

// Async thunk for fetching questions
export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      // Check cache first
      const cachedData = await AsyncStorage.getItem('questions');
      const cacheTime = await AsyncStorage.getItem('questions_time');
      
      // If data is cached and less than 5 minutes old, use it
      if (cachedData && cacheTime) {
        const timeDiff = Date.now() - parseInt(cacheTime);
        if (timeDiff < 5 * 60 * 1000) { // 5 minutes
          return JSON.parse(cachedData);
        }
      }

      // Fetch from API
      const response = await api.get('/getQuestions');
      const questions = response.data;

      // Cache the data
      await AsyncStorage.setItem('questions', JSON.stringify(questions));
      await AsyncStorage.setItem('questions_time', Date.now().toString());

      return questions;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Sorular yüklenirken bir hata oluştu');
    }
  }
);

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
        state.lastFetched = Date.now();
        state.error = null;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = questionSlice.actions;