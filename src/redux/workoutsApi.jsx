import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutsApi = createApi({
  reducerPath: 'workoutsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skyprofitness-5554f-default-rtdb.europe-west1.firebasedatabase.app',
  }),

  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => '/workouts.json',
    }),

    updateUserData: builder.mutation({
      query: (updatedUsers) => ({
        url: '/workouts.json',
        method: 'POST',
        body: updatedUsers,
      }),
    }),
  }),
})

export const { useGetWorkoutsQuery, useUpdateUserDataMutation } = workoutsApi
