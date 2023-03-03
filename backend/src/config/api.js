const axios = require('axios');
const md5 = require('md5');
const dotenv = require('dotenv');

dotenv.config();

const baseURL = "http://gateway.marvel.com/v1/public/";

const time = Number(new Date());
const hash = md5(time + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);

const api = axios.create({
    baseURL: `${baseURL}/comics?limit=100&ts=${time}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`
});

module.exports = api;