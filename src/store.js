import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";
import { faker } from '@faker-js/faker';

const moviesReducer = (state = [], action) => {
    if (action.type === 'SET_MOVIES'){
        return action.movies;
    }
    if (action.type === 'CREATE_MOVIE'){
        return [...state, action.movie];
    }
    if (action.type === 'DELETE_MOVIE'){
        return state.filter( movie => movie.id !== action.movie.id );
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

export const createMovie = () => {
    return async(dispatch) => {
        const movie = (await axios.post('/api/movies')).data;
        dispatch({ type: 'CREATE_MOVIE', movie });
        // history.push("/movies");
    }
};

export const deleteMovie = (movie) => {
    return async(dispatch) => {
        await axios.delete(`/api/movies/${movie.id}`);
        dispatch({ type: 'DELETE_MOVIE', movie });
    }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;