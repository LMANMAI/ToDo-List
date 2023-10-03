import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProyectoState {
  panel: boolean;
  panelproyecto: boolean;
  proyectos: any[];
  errorformulario: boolean;
  proyectoactivo: any | null;
  panelterminados: boolean;
  proyectosterminados: any[];
  mensaje: string | null;
  badge: boolean;
  badgeT: boolean;
}

const initialState: ProyectoState = {
  panel: false,
  panelproyecto: false,
  proyectos: [],
  errorformulario: false,
  proyectoactivo: null,
  panelterminados: false,
  proyectosterminados: [],
  mensaje: null,
  badge: false,
  badgeT: false,
};

const proyectoSlice = createSlice({
  name: "proyecto",
  initialState,
  reducers: {
    showPanel: (state) => {
      state.panel = !state.panel;
      state.errorformulario = false;
      state.panelproyecto = false;
      state.panelterminados = false;
    },
    mostrarPanel: (state) => {
      state.panel = false;
      state.panelproyecto = !state.panelproyecto;
      state.panelterminados = false;
      state.badge = false;
    },
    mostrarTerminados: (state) => {
      state.panel = false;
      state.panelproyecto = false;
      state.panelterminados = !state.panelterminados;
      state.badgeT = false;
    },
    obtenerProyectos: (state, action: PayloadAction<any[]>) => {
      state.proyectos = action.payload.filter((proyecto) => !proyecto.estado);
      state.proyectosterminados = action.payload.filter(
        (proyecto) => proyecto.estado
      );
      state.mensaje = null;
    },
    agregarProyecto: (state, action: PayloadAction<any>) => {
      state.proyectos = [action.payload, ...state.proyectos];
      state.panel = false;
      state.errorformulario = false;
      state.mensaje = null;
      state.badge = true;
    },
    proyectoActual: (state, action: PayloadAction<any>) => {
      state.proyectoactivo = action.payload;
      state.panel = false;
      state.panelproyecto = false;
    },
    terminarProyecto: (state, action: PayloadAction<any>) => {
      state.proyectos = state.proyectos.filter(
        (proyecto) => proyecto._id !== action.payload._id
      );
      state.proyectosterminados = [
        ...state.proyectosterminados,
        action.payload,
      ];
      state.proyectoactivo = null;
      state.mensaje = null;
      state.badgeT = true;
    },
    eliminarProyecto: (state, action: PayloadAction<string>) => {
      state.proyectos = state.proyectos.filter(
        (proyecto) => proyecto._id !== action.payload
      );
      state.proyectosterminados = state.proyectosterminados.filter(
        (proyecto) => proyecto._id !== action.payload
      );
      state.proyectoactivo = null;
      state.mensaje = null;
    },
    proyectoError: (state, action: PayloadAction<string>) => {
      state.mensaje = action.payload;
    },
    proyectoNull: (state) => {
      state.proyectoactivo = null;
    },
  },
});

export const {
  showPanel,
  mostrarPanel,
  mostrarTerminados,
  obtenerProyectos,
  agregarProyecto,
  proyectoActual,
  terminarProyecto,
  eliminarProyecto,
  proyectoError,
  proyectoNull,
} = proyectoSlice.actions;

export default proyectoSlice.reducer;
