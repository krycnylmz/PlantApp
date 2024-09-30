import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/config';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL}),
  keepUnusedDataFor: 300, // Keep cached data for 5 min 
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'getCategories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
