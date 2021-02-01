import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//importo los componentes
import Login from './components/auth/Login';
import Singin from './components/auth/Singin';
import DashboarIndex from './components/dashboard/DashboarIndex';

//importo los context
import ProyectoState from './context/proyects/proyectoState';
function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component ={Login} />
          <Route exact path="/singin" component ={Singin} />
          <Route exact path="/dashboard" component ={DashboarIndex} />
        </Switch>
      </Router>
    </ProyectoState>
  );
}

export default App;
