import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importo los componentes

import DashboardIndex from "../components/dashboard/DashboardIndex";
import { AuthPage } from '../pages'
//importo los context
import ProyectoState from "../context/proyects/proyectoState";
import TaskState from "../context/task/taskState";
import AlertaState from "../context/alertas/alertaState";
import AuthState from "../context/auth/authState";
import tokenAuth from "../config/tokenAuth";
//Protego el componente
import PrivateRoute from "./PrivateRoute";
function Routes() {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }
  return (
    <ProyectoState>
      <TaskState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/pruebas" component={AuthPage} />
                <PrivateRoute
                  exact
                  path="/dashboard"
                  component={DashboardIndex}
                />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProyectoState>
  );
}

export default Routes;
