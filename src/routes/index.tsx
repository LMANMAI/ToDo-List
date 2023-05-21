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
                  <Route path="/Dashboard" element={<DashboardPage />} />
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
