const express = require('express');
const routes = express.Router();
const api = require('../config/api');

routes.get("/", async (request, response) => {
    const { data } = await api.get();
    const listComics = data.data.results;
    const comics = listComics.map((comic) => {
        return {
            title: comic.title,
            thumbnail: comic.thumbnail,
            dates: comic.dates,
            description: comic.description,
            creators: comic.creators
        }
    });
    return response.send(comics);
});

module.exports = routes;