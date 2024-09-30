import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from '@/app/services/categoriesApi';
import { questionsApi } from '@/app/services/questionsApi';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      questionsApi.middleware
    ),
});

// Root state and AppDispatch type export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
