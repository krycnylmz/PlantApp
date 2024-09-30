import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/' }),
  keepUnusedDataFor: 300, // Keep cached data for 5 min 
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'getCategories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
