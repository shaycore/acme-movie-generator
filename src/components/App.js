
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { fetchMovies, createMovie  } from '../store';
import Movies from './Movies';

class App extends Component {
    componentDidMount() {
        this.props.load();
    }
    render() {
        return (
            <Router>
                <div id='main'>
                    <h1>
                        <Link to='/'>Movies ({ this.props.movies.length })</Link>
                    </h1>
                    <button onClick={ this.props.createMovie }>Create A New Movie</button>
                    <Routes>
                        <Route exact path='/' element={<Movies />} />
                    </Routes>
                </div>
            </Router>
        )

    }
}

const mapStateToProps = ({ movies }) => ({
    movies
});

const mapDispatchToProps = (dispatch) => {
    return {
        createMovie: () => {
            dispatch(createMovie())
        },
        load: () => {
            dispatch(fetchMovies())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);