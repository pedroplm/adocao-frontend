import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import AddPet from './pages/AddPet';
import PetByID from './pages/PetByID';
import EditPet from './pages/EditPet';

function App() {

 
  return (
    <div className="App">
      <Router>
      <Link to ="/addpet"> Adicionar Pet</Link>
      <Link to ="/"> Home Page</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addpet" exact component={AddPet} />
          <Route path="/petbyid/:id" exact component={PetByID} />
          <Route path="/editpet/:id" exact component={EditPet} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
