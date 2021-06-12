import Navbar from './Components/Navigation/Navbar';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import CreateCategory from "./Components/Create/CreateCategory";
import CreateVehicle from "./Components/Create/CreateVehicle";
import VehicleTable from "./Components/Display/VehicleTable";
import EditVehicle from "./Components/Edit/EditVehicle";
// import Courses from "./components/Display/course";
// import Subjects from "./components/Display/Subjects";
function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <section>
                <Switch>
                    <Route exact path="/create-vehicle" component={CreateVehicle}/>
                    <Route exact path="/create-category" component={CreateCategory}/>
                    <Route exact path="/display-vehicle" component={VehicleTable}/>
                    <Route exact path="/update-vehicle/:id" component={EditVehicle}/>
                </Switch>
            </section>
        </Router>
    </div>
  );
}

export default App;
