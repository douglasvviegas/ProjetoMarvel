const routes = require('express').Router();

const showComicsController = require('../app/controllers/showComicsController');

routes.get('/comics', listComicsController.read);

module.exports = routes;