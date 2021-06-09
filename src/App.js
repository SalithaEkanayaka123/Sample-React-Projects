import Navbar from './components/Navigation/navbar';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import CreatePost from "./components/CreateFolder/createPost";
import CreateSubject from "./components/CreateFolder/createSubject";
import Courses from "./components/Display/course";
function App() {
  return (
      <div className = "App" >
          <Router>
            <Navbar/>
            <section>
              <Switch>
                  <Route exact path="/create-subject" component={CreateSubject}/>
                  <Route exact path="/create-course" component={CreatePost}/>
                  <Route exact path="/" component={Courses}/>
              </Switch>
            </section>
          </Router>
          

      </div>
  );
}
export default App;
