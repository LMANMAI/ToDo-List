import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
  autenticathed: boolean;
}

const initialState: UserState = {
  currentUser: null,
  autenticathed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.autenticathed = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  setCurrentUser,
  setAuthenticated,
  updateUser,
  clearCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
