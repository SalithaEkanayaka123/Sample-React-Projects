
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import DisplayStudent from './components/DisplayStudent';
import Home from './components/Home';
import { Route, BrowserRouter, Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className = "App" >
                <BrowserRouter>
                    <Navbar/>
                    <Route path = "/" exact component={Home}/>
                    <Route path = "/AddStudent" exact component={AddStudent}/>
                    <Route path = "/Home" exact component={Home}/>
                    <Route path = "/DisplayStudent" exact component={DisplayStudent}/>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;