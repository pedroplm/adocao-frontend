import './reset.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import EditPet from './pages/EditPet';
import Login from './pages/Login';
import Registration from './pages/Registration';


function App() {

 
  return (
    <div className="App">
      <Router>
        <div class = "pet__header">
        <Link to ="/home"> Home Page</Link>
        <Link to ="/addpet"> Adicionar Pet</Link>
        <Link to ="/"> Login </Link>
        <Link to ="/registration"> Criar conta </Link>
        </div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/addpet" exact component={AddPet} />
          <Route path="/editpet/:id" exact component={EditPet} />
          <Route path="/registration" exact component={Registration} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
