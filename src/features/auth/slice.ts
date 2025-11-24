import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types';
import { storage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/utils/constants';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: storage.get<User>(STORAGE_KEYS.USER),
  token: storage.get<string>(STORAGE_KEYS.AUTH_TOKEN),
  isAuthenticated: !!storage.get<string>(STORAGE_KEYS.AUTH_TOKEN),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      storage.set(STORAGE_KEYS.USER, action.payload?.user);
      storage.set(STORAGE_KEYS.AUTH_TOKEN, action.payload?.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      storage.remove(STORAGE_KEYS.USER);
      storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

