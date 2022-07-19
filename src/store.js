import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";


const moviesReducer = (state = [], action) => {
    return state;
};

const reducer = combineReducers({
    movies: moviesReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;