import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices/appSlice';
import { plantSlice } from './slices/plantSlice';
import { questionSlice } from './slices/questionSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    plants: plantSlice.reducer,
    questions: questionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;