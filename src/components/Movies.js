import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie, updateMovie  } from '../store';


const Movies = ({ movies, deleteMovie, updateMovie }) => {
    return (
        <div>
            <ul>
                { movies.map((movie)=> {
                    return (
                        <li key={ movie.id }>
                            <Link to={`/movies/${movie.id}`}>
                                { movie.name.toLowerCase() }
                            </Link>
                            ({ movie.stars })
                            <button onClick={ () => deleteMovie(movie) }>X</button>
                            <button onClick={ ()=> updateMovie(movie, 1) }>+</button>
                            <button onClick={ ()=> updateMovie(movie, -1) }>-</button>

                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ movies }) => ({
    movies
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (movie) => {
            dispatch(deleteMovie(movie))
        },
        updateMovie: (movie, val) => {
            movie = { ...movie, stars: movie.stars + val }
            dispatch(updateMovie(movie))
        }
        
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Movies);