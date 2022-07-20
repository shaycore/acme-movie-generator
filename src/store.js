import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";


const moviesReducer = (state = [], action) => {
    if (action.type === 'SET_MOVIES'){
        return action.movies;
    }
    return state;
};

const reducer = combineReducers({
    movies: moviesReducer
});

export const fetchMovies = () => {
    return async(dispatch) => {
        const movies = (await axios.get('/api/movies')).data;
        dispatch({ type: 'SET_MOVIES', movies });
    }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;