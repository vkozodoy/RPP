import { baseApi } from '@/features/api/baseApi';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

interface Cart {
  id: number;
  userId: number;
  products: Array<{
    id: number;
    quantity: number;
  }>;
}

interface CartsResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, { limit?: number; skip?: number }>({
      query: ({ limit = 30, skip = 0 }) => `/users?limit=${limit}&skip=${skip}`,
      providesTags: ['User'],
    }),
    getCarts: builder.query<CartsResponse, { limit?: number; skip?: number }>({
      query: ({ limit = 30, skip = 0 }) => `/carts?limit=${limit}&skip=${skip}`,
    }),
    getTotalProducts: builder.query<{ total: number }, void>({
      query: () => '/products?limit=0',
      transformResponse: (response: { total: number }) => ({ total: response.total }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetCartsQuery,
  useGetTotalProductsQuery,
} = dashboardApi;

