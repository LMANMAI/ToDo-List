import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importo los componentes
import { AuthPage, DashboardPage } from "../pages";
//importo los context
import {
  ProyectoState,
  TaskState,
  AlertaState,
  AuthState,
  AnimationState,
} from "../context";

import tokenAuth from "../config/tokenAuth";
//Protego el componente

function RoutesComponent() {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }
  return (
    <ProyectoState>
      <TaskState>
        <AlertaState>
          <AuthState>
            <AnimationState>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<AuthPage />} />
                  <Route path="/dashboard/*" element={<DashboardPage />}>
                    <Route index element={<div>index</div>} />
                    <Route
                      path="newproyects"
                      element={<div>newproyects</div>}
                    />
                    <Route path="proyects" element={<div>proyects</div>} />
                    <Route
                      path="finishedproyectos"
                      element={<div>finishedproyectos</div>}
                    />
                  </Route>
                </Routes>
              </BrowserRouter>
            </AnimationState>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProyectoState>
  );
}

export default RoutesComponent;
