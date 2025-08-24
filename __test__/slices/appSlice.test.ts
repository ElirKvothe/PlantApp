import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appSlice, checkOnboardingStatus, completeOnboarding, setOnboardingCompleted } from '../../store/slices/appSlice';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage');
const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('appSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        app: appSlice.reducer,
      },
    });
    jest.clearAllMocks();
  });

  describe('initial state', () => {
    it('should have correct initial state', () => {
      const state = store.getState().app;
      expect(state).toEqual({
        hasCompletedOnboarding: false,
        isLoading: true,
      });
    });
  });

  describe('checkOnboardingStatus', () => {
    it('should return true when onboarding is completed', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('true');
      
      const result = await store.dispatch(checkOnboardingStatus());
      
      expect(result.payload).toBe(true);
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith('is_onboarding_completed');
    });

    it('should return false when onboarding is not completed', async () => {
      mockAsyncStorage.getItem.mockResolvedValue(null);
      
      const result = await store.dispatch(checkOnboardingStatus());
      
      expect(result.payload).toBe(false);
    });

    it('should return false when AsyncStorage throws error', async () => {
      mockAsyncStorage.getItem.mockRejectedValue(new Error('Storage error'));
      
      const result = await store.dispatch(checkOnboardingStatus());
      
      expect(result.payload).toBe(false);
    });

    it('should update state correctly when fulfilled', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('true');
      
      await store.dispatch(checkOnboardingStatus());
      
      const state = store.getState().app;
      expect(state.hasCompletedOnboarding).toBe(true);
      expect(state.isLoading).toBe(false);
    });

    it('should update state correctly when rejected', async () => {
      mockAsyncStorage.getItem.mockRejectedValue(new Error('Storage error'));
      
      await store.dispatch(checkOnboardingStatus());
      
      const state = store.getState().app;
      expect(state.hasCompletedOnboarding).toBe(false);
      expect(state.isLoading).toBe(false);
    });

    it('should set loading to true when pending', () => {
      const pendingAction = { type: checkOnboardingStatus.pending.type };
      const newState = appSlice.reducer({ hasCompletedOnboarding: false, isLoading: false }, pendingAction);
      
      expect(newState.isLoading).toBe(true);
    });
  });

  describe('completeOnboarding', () => {
    it('should complete onboarding successfully', async () => {
      mockAsyncStorage.setItem.mockResolvedValue();
      
      const result = await store.dispatch(completeOnboarding());
      
      expect(result.payload).toBe(true);
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('is_onboarding_completed', 'true');
    });

    it('should handle AsyncStorage error', async () => {
      const error = new Error('Storage error');
      mockAsyncStorage.setItem.mockRejectedValue(error);
      
      const result = await store.dispatch(completeOnboarding());
      
      expect(result.type).toBe('app/completeOnboarding/rejected');
    });

    it('should update state when onboarding completed', async () => {
      mockAsyncStorage.setItem.mockResolvedValue();
      
      await store.dispatch(completeOnboarding());
      
      const state = store.getState().app;
      expect(state.hasCompletedOnboarding).toBe(true);
    });
  });

  describe('setOnboardingCompleted reducer', () => {
    it('should update hasCompletedOnboarding to true', () => {
      const action = setOnboardingCompleted(true);
      const newState = appSlice.reducer(
        { hasCompletedOnboarding: false, isLoading: false },
        action
      );
      
      expect(newState.hasCompletedOnboarding).toBe(true);
      expect(newState.isLoading).toBe(false);
    });

    it('should update hasCompletedOnboarding to false', () => {
      const action = setOnboardingCompleted(false);
      const newState = appSlice.reducer(
        { hasCompletedOnboarding: true, isLoading: false },
        action
      );
      
      expect(newState.hasCompletedOnboarding).toBe(false);
    });
  });
});