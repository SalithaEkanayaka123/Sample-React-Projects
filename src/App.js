
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ExercisesList from './components/exerciseslist';
import EditExercise from './components/editexercise';
import CreateExercise from './components/createexercise';
import CreateUser from './components/createuser';

function App() {
  return (
    <div className = "container">
      <Router>
        
                  <Navbar/>
                  <br/>
                  <Route path = "/" exact component={ExercisesList}/>
                  <Route path = "/edit/:id" exact component={EditExercise}/>
                  <Route path = "/create" exact component={CreateExercise}/>
                  <Route path = "/user" exact component={CreateUser}/>
      </Router>
     </div>
  );
}

export default App;
