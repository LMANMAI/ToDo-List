import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bg: false,
  isHighlighted: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setBgUi: (state, action: PayloadAction<boolean>) => {
      state.bg = action.payload;
    },
    setIsHighlighted: (state, action: PayloadAction<string>) => {
      state.isHighlighted = action.payload;
    },
  },
});

export const { setBgUi, setIsHighlighted } = uiSlice.actions;

export default uiSlice.reducer;
