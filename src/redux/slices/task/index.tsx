import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tareasproyecto: any[];
  errortarea: boolean;
  tareaactual: any | null;
}

const initialState: TaskState = {
  tareasproyecto: [],
  errortarea: false,
  tareaactual: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTareasProyecto: (state, action: PayloadAction<any[]>) => {
      state.tareasproyecto = action.payload;
    },
    setTareaActual: (state, action: PayloadAction<any | null>) => {
      state.tareaactual = action.payload;
    },
  },
});

export const { setTareasProyecto, setTareaActual } = taskSlice.actions;

export default taskSlice.reducer;
