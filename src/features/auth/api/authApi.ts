import { baseApi } from '@/features/api/baseApi';
import type { LoginRequest, LoginResponse } from '@/types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<LoginResponse, void>({
      query: () => '/auth/me',
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = authApi;

