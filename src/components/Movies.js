import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMovie  } from '../store';


const Movies = ({ movies, deleteMovie }) => {
    return (
        <div>
            <ul>
                { movies.map((movie)=> {
                    return (
                        <li key={ movie.id }>
                            <Link to={`/movies/${movie.id}`}>
                                { movie.name.toLowerCase() }
                            </Link>
                            <button onClick={ () => deleteMovie(movie) }>X</button>
                            <button onClick={()=>{console.log('hi')}}>+</button>
                            <button onClick={()=>{console.log('hi')}}>-</button>

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
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Movies);