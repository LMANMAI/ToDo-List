import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//importo los componentes
import Login from './components/auth/Login';
import Singin from './components/auth/Singin';
import DashboardIndex from './components/dashboard/DashboardIndex';

//importo los context
import ProyectoState from './context/proyects/proyectoState';
import TaskState from './context/task/taskState';
function App() {
  return (
    <ProyectoState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component ={Login} />
            <Route exact path="/singin" component ={Singin} />
            <Route exact path="/dashboard" component ={DashboardIndex} />
          </Switch>
        </Router>
      </TaskState>
    </ProyectoState>
  );
}

export default App;
