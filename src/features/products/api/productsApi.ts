import { baseApi } from '@/features/api/baseApi';
import type { Product, ProductsResponse } from '@/types';

interface GetProductsParams {
  limit?: number;
  skip?: number;
  search?: string;
}

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, GetProductsParams>({
      query: ({ limit = 30, skip = 0, search }) => {
        const params = new URLSearchParams();
        params.append('limit', limit.toString());
        params.append('skip', skip.toString());
        if (search) {
          params.append('q', search);
        }
        return `/products?${params.toString()}`;
      },
      providesTags: ['Products'],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Product', id }],
    }),
    getProductsByCategory: builder.query<ProductsResponse, string>({
      query: (category) => `/products/category/${category}`,
      providesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;

