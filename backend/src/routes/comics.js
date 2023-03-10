const routes = require('express').Router();

const listComicsController = require('../app/controllers/listComicsController');

routes.get('/comics', listComicsController.read);

module.exports = routes;