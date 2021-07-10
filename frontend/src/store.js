import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from "redux";
import rootReducers from './Redux/reducers'

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)