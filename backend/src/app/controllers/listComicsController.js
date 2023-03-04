const api = require('../../config/api');

module.exports = {
    async read(request, response) {
        const { data } = await api.get();
        const listComics = data.data.results;
        const comics = listComics.map((comic) => {
            return {
                id: comic.id,
                title: comic.title,
                thumbnail: comic.thumbnail,
                dates: comic.dates,
                description: comic.description,
                creators: comic.creators
            }
        });
        return response.send(comics);
    }
}