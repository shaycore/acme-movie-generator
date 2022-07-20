import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = ({ movies }) => {
    return (
        <div>
            <ul>
                { movies.map((movie)=> {
                    return (
                        <li key={ movie.id }>
                            <Link to={`/movies/${movie.id}`}>
                                { movie.name.toLowerCase() }
                            </Link>
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

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Movies);