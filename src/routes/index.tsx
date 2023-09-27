import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { NewProyect, EndProyects, ProyectList, Task } from "../containers";
import { useDispatch } from "react-redux";
import tokenAuth from "../config/tokenAuth";
import authentication from "../services/authentication";
import { setCurrentUser } from "../redux/slices/user";
//Protego el componente

function RoutesComponent() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const autenticathedUser = async () => {
      const res = await authentication();
      dispatch(
        setCurrentUser({
          id: res._id,
          name: res.nombre,
          email: res.email,
        })
      );
      console.log(res);
    };

    if (token) {
      tokenAuth(token);
      autenticathedUser();
    } else {
      <Navigate to="/" />;
    }
  }, [token]);

  return (
    <ProyectoState>
      <TaskState>
        <AlertaState>
          <AuthState>
            <AnimationState>
              <BrowserRouter>
                <Routes>
                  {token ? (
                    <Route path="/*" element={<DashboardPage />}>
                      <Route index element={<div>index</div>} />
                      <Route path="newproyects" element={<NewProyect />} />
                      <Route path="proyects" element={<ProyectList />} />
                      <Route path="proyects/:id" element={<Task />} />
                      <Route
                        path="finishedproyectos"
                        element={<EndProyects />}
                      />
                    </Route>
                  ) : (
                    <Route path="/" element={<AuthPage />} />
                  )}
                </Routes>
              </BrowserRouter>{" "}
            </AnimationState>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProyectoState>
  );
}

export default RoutesComponent;
