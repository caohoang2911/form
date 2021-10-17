import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginPayload {
  username: string;
  password: string;
}
interface UserInfo {
  id: string | number;
  name: string;
  age: number;
}
interface AuthState {
  auth: boolean;
  userInfo: UserInfo | undefined;
  logging: boolean;
  action1?: string;
  action2?: string;
}

const authInitial: AuthState = {
  auth: false,
  userInfo: undefined,
  logging: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitial,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    logout: (state) => {
      state.auth = false;
    },
    loginSuccess: (state, action: PayloadAction<UserInfo>) => {
      state.logging = false;
      state.auth = true;
      state.userInfo = action.payload;
    },
    loginFailed: (state, action: PayloadAction<any>) => {
      state.logging = false;
    },
    search: (state, { payload }: PayloadAction<string>) => {
      // console.log(payload, "search");
    },
  },
});
export const authAction = authSlice.actions;
export const { login, logout, loginSuccess, loginFailed, search } =
  authSlice.actions;

export default authSlice.reducer;
