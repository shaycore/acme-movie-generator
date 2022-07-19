const { faker } = require('@faker-js/faker');

randomizeMovie = () => {
    return { name: faker.random.words(3) }
}

const MOVIES = [];
Array.from({length: 10}).forEach(()=>MOVIES.push(randomizeMovie()));

module.exports = { MOVIES, randomizeMovie }
