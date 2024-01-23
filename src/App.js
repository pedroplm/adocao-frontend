import './reset.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import EditPet from './pages/EditPet';

function App() {

 
  return (
    <div className="App">
      <Router>
        <div class = "pet__header">
        <Link to ="/"> Home Page</Link>
        <Link to ="/addpet"> Adicionar Pet</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addpet" exact component={AddPet} />
          <Route path="/editpet/:id" exact component={EditPet} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
