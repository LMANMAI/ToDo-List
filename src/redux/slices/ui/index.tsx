import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bg: false,
  isHighlighted: "",
  openmenu: false,
  editmode: false,
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
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.openmenu = action.payload;
    },
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.editmode = action.payload;
    },
  },
});

export const { setBgUi, setIsHighlighted, setOpenMenu, setEditMode } =
  uiSlice.actions;

export default uiSlice.reducer;
