import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/' }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => 'getQuestions',
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
