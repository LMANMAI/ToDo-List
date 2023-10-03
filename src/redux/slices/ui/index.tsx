import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bg: false,
  isHighlighted: "",
  openmenu: false,
  editmode: false,
  panel: false,
  panelnuevoproyecto: false,
  panelproyectos: false,
  panelterminados: false,
  panelDashboard: false,
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
      state.panelnuevoproyecto = false;
      state.panelproyectos = false;
      state.panelterminados = false;
    },
    movePanelNuevoProyecto: (state) => {
      state.panelnuevoproyecto = !state.panelnuevoproyecto;
      state.panelproyectos = false;
      state.panelterminados = false;
    },
    movePanelProyectos: (state) => {
      state.panelnuevoproyecto = false;
      state.panelproyectos = !state.panelproyectos;
      state.panelterminados = false;
    },
    movePanelProyectosTerminados: (state) => {
      state.panelnuevoproyecto = false;
      state.panelproyectos = false;
      state.panelterminados = !state.panelterminados;
    },
    allFalse: (state) => {
      state.panel = false;
      state.panelnuevoproyecto = false;
      state.panelproyectos = false;
      state.panelterminados = false;
    },
    setPanelDashboard: (state, action: PayloadAction<boolean>) => {
      state.panelDashboard = action.payload;
    },
  },
});

export const {
  setBgUi,
  setIsHighlighted,
  setOpenMenu,
  setEditMode,
  movePanelAuth,
  movePanelNuevoProyecto,
  movePanelProyectos,
  movePanelProyectosTerminados,
  allFalse,
  setPanelDashboard,
} = uiSlice.actions;

export default uiSlice.reducer;
