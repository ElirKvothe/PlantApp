import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PlantCategory } from '@/types/plant';
import { api } from '@/utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PlantState {
  categories: PlantCategory[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: PlantState = {
  categories: [],
  loading: false,
  error: null,
  lastFetched: null,
};

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk(
  'plants/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      // Check cache first
      const cachedData = await AsyncStorage.getItem('plant_categories');
      const cacheTime = await AsyncStorage.getItem('plant_categories_time');
      
      // If data is cached and less than 5 minutes old, use it
      if (cachedData && cacheTime) {
        const timeDiff = Date.now() - parseInt(cacheTime);
        if (timeDiff < 5 * 60 * 1000) { // 5 minutes
          return JSON.parse(cachedData);
        }
      }

      // Fetch from API
      const response = await api.get('/getCategories');
      const categories = response.data.data;

      // Cache the data
      await AsyncStorage.setItem('plant_categories', JSON.stringify(categories));
      await AsyncStorage.setItem('plant_categories_time', Date.now().toString());

      return categories;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Kategoriler yüklenirken bir hata oluştu');
    }
  }
);

export const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.lastFetched = Date.now();
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = plantSlice.actions;