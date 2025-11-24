export const API_BASE_URL = 'https://dummyjson.com';

export const ROUTES = {
  LOGIN: '/',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
} as const;

