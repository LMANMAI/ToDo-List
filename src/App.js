import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//importo los componentes
import Login from './components/auth/Login';
import Singin from './components/auth/Singin';
import DashboardIndex from './components/dashboard/DashboardIndex';
//importo los context
import ProyectoState from './context/proyects/proyectoState';
import TaskState from './context/task/taskState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/tokenAuth';
//Protego el componente
import PrivateRoute from './routes/PrivateRoute';
function App() {
  //reviso que haya un token
  const token = localStorage.getItem('token');
  if(token){
    tokenAuth(token);
  }
  return (
    <ProyectoState>
      <TaskState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component ={Login} />
                <Route exact path="/singin" component ={Singin} />
                <PrivateRoute exact path="/dashboard" component ={DashboardIndex} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TaskState>
    </ProyectoState>
  );
}

export default App;
