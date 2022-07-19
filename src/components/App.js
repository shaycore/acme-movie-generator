
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div id='main'>
                    <h1> HELLO </h1>
                </div>
            </Router>
        )

    }
}

export default connect()(App);