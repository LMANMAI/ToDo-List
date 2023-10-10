import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage, DashboardPage } from "../pages";
import {
  NewProyect,
  EndProyects,
  ProyectList,
  Task,
  HomePage,
} from "../containers";
import { useDispatch } from "react-redux";
import tokenAuth from "../config/tokenAuth";
import { authentication } from "../services";
import { setCurrentUser } from "../redux/slices/user";

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
    };

    if (token) {
      tokenAuth(token);
      autenticathedUser();
    } else {
      <Navigate to="/" />;
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <Route path="/*" element={<DashboardPage />}>
            <Route index element={<HomePage />} />
            <Route path="newpanel" element={<NewProyect />} />
            <Route path="panel" element={<ProyectList />} />
            <Route path="panel/:id" element={<Task />} />
            <Route path="finishedpanel" element={<EndProyects />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
