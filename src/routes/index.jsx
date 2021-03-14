import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importo los componentes
import DashboardIndex from "../components/dashboard/DashboardIndex";
import { AuthPage } from "../pages";
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
            <AnimationState>
              <Router>
                <Switch>
                  <Route exact path="/" component={AuthPage} />
                  <PrivateRoute
                    exact
                    path="/dashboard"
                    component={DashboardIndex}
                  />
                </Switch>
              </Router>
            </AnimationState>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProyectoState>
  );
}

export default Routes;
