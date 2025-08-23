import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { plantSlice, fetchCategories, clearError } from '../../store/slices/plantSlice';
import { api } from '../../utils/api';

// Mock dependencies
jest.mock('@react-native-async-storage/async-storage');
jest.mock('../../utils/api');

const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;
const mockApi = api as jest.Mocked<typeof api>;

const mockCategories = [
  {
    id: 1,
    name: 'flowers',
    title: 'Flowers',
    rank: 1,
    image: { id: 1, url: 'https://example.com/flower.jpg' }
  },
  {
    id: 2,
    name: 'trees',
    title: 'Trees',
    rank: 2,
    image: { id: 2, url: 'https://example.com/tree.jpg' }
  }
];

describe('plantSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        plants: plantSlice.reducer,
      },
    });
    jest.clearAllMocks();
    // Mock Date.now for consistent testing
    jest.spyOn(Date, 'now').mockReturnValue(1000000);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('initial state', () => {
    it('should have correct initial state', () => {
      const state = store.getState().plants;
      expect(state).toEqual({
        categories: [],
        loading: false,
        error: null,
        lastFetched: null,
      });
    });
  });

  describe('fetchCategories', () => {
    it('should fetch categories from API when cache is empty', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(null);
      mockApi.get.mockResolvedValue({ data: { data: mockCategories } });
      
      const result = await store.dispatch(fetchCategories());
      
      expect(result.payload).toEqual(mockCategories);
      expect(mockApi.get).toHaveBeenCalledWith('/getCategories');
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('plant_categories', JSON.stringify(mockCategories));
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('plant_categories_time', '1000000');
    });

    it('should use cached data when cache is fresh', async () => {
      const cachedTime = (1000000 - 60000).toString(); // 1 minute ago
      mockAsyncStorage.getItem
        .mockResolvedValueOnce(JSON.stringify(mockCategories)) // cached data
        .mockResolvedValueOnce(cachedTime); // cache time
      
      const result = await store.dispatch(fetchCategories());
      
      expect(result.payload).toEqual(mockCategories);
      expect(mockApi.get).not.toHaveBeenCalled();
    });

    it('should fetch from API when cache is stale', async () => {
      const staleTime = (1000000 - 6 * 60 * 1000).toString(); // 6 minutes ago
      mockAsyncStorage.getItem
        .mockResolvedValueOnce(JSON.stringify(mockCategories)) // cached data
        .mockResolvedValueOnce(staleTime); // stale cache time
      mockApi.get.mockResolvedValue({ data: { data: mockCategories } });
      
      const result = await store.dispatch(fetchCategories());
      
      expect(result.payload).toEqual(mockCategories);
      expect(mockApi.get).toHaveBeenCalledWith('/getCategories');
    });

    it('should handle API error', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(null);
      mockApi.get.mockRejectedValue(new Error('Network error'));
      
      const result = await store.dispatch(fetchCategories());
      
      expect(result.type).toBe('plants/fetchCategories/rejected');
      expect(result.payload).toBe('Network error');
    });

    it('should update state correctly when fulfilled', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(null);
      mockApi.get.mockResolvedValue({ data: { data: mockCategories } });
      
      await store.dispatch(fetchCategories());
      
      const state = store.getState().plants;
      expect(state.categories).toEqual(mockCategories);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(null);
      expect(state.lastFetched).toBe(1000000);
    });

    it('should update state correctly when rejected', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(null);
      mockApi.get.mockRejectedValue(new Error('Network error'));
      
      await store.dispatch(fetchCategories());
      
      const state = store.getState().plants;
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Network error');
    });

    it('should set loading to true when pending', () => {
      const pendingAction = { type: fetchCategories.pending.type };
      const newState = plantSlice.reducer(
        { categories: [], loading: false, error: 'Previous error', lastFetched: null },
        pendingAction
      );
      
      expect(newState.loading).toBe(true);
      expect(newState.error).toBe(null);
    });
  });

  describe('clearError reducer', () => {
    it('should clear error', () => {
      const action = clearError();
      const newState = plantSlice.reducer(
        { categories: [], loading: false, error: 'Some error', lastFetched: null },
        action
      );
      
      expect(newState.error).toBe(null);
    });
  });
});