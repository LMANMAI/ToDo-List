import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProyectoState {
  currentproyect: any | null;
  finishedpryects: any | [];
  activeproyects: any | [];
}

const initialState: ProyectoState = {
  currentproyect: null,
  activeproyects: [],
  finishedpryects: [],
};

const proyectoSlice = createSlice({
  name: "proyecto",
  initialState,
  reducers: {
    setCurrentProyect: (state, action: PayloadAction<any>) => {
      state.currentproyect = action.payload;
    },
    setActiveProyects: (state, action: PayloadAction<any>) => {
      state.activeproyects = action.payload;
    },
    setFinishedProyects: (state, action: PayloadAction<any>) => {
      state.finishedpryects = action.payload;
    },
  },
});

export const { setCurrentProyect, setActiveProyects, setFinishedProyects } =
  proyectoSlice.actions;

export default proyectoSlice.reducer;
