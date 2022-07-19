const conn = require('./conn');
const Movie = require('./Movie');
const { MOVIES } = require('./seeder');


const syncAndSeed = async() => {
    await conn.sync({ force: true });
    await Promise.all(MOVIES.map((movie) => Movie.create(movie)));
}

module.exports = {
    conn,
    syncAndSeed,
    models: {
        Movie
    }
};