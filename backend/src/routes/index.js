const routes = require('express').Router();

const comics = require('./comics');

routes.use(comics);

module.exports = routes;