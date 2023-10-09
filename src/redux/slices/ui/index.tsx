import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bg: false,
  isHighlighted: "",
  openmenu: false,
  editmode: false,
  panel: false,
  panelDashboard: false,
  deletemode: false,
  logoutmode: false,
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
    movePanelAuth: (state) => {
      state.panel = !state.panel;
    },

    setPanelDashboard: (state, action: PayloadAction<boolean>) => {
      state.panelDashboard = action.payload;
    },
    setDeleteMode: (state, action: PayloadAction<boolean>) => {
      state.deletemode = action.payload;
    },
    setLogoutStatus: (state, action: PayloadAction<boolean>) => {
      state.deletemode = action.payload;
    },
  },
});

export const {
  setBgUi,
  setIsHighlighted,
  setOpenMenu,
  setEditMode,
  movePanelAuth,
  setPanelDashboard,
  setDeleteMode,
  setLogoutStatus,
} = uiSlice.actions;

export default uiSlice.reducer;
