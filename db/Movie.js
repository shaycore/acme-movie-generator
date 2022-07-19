const Sequelize = require('sequelize');
const conn = require('./conn');
const { STRING, INTEGER } = Sequelize;

const Movie = conn.define('movie', {
    name: {
        type: STRING,
        allowNull: false
    },
    stars: {
        type: INTEGER,
        defaultValue: 3
    }
});

module.exports = Movie;