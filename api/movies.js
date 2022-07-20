const router = require('express').Router();
const { Movie } = require('../db').models;
const { faker } = require('@faker-js/faker');

router.get('/', async(req,res,next) => {
    try {
        res.send(await Movie.findAll());
    } catch(err) {
        next(err);
    }
});

router.post('/', async(req,res,next) => {
    try {
        res.status(201).send(await Movie.create(
            {
                name: faker.random.words(3)
            }
        ));
    } catch(err) {
        next(err); 
    }
});

module.exports = router;