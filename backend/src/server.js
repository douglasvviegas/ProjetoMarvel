const express = require('express');
const logger = require('./utils/logger');
const dotenv = require('dotenv');
const routes = require('./routes/index');

dotenv.config();

class Server {
  constructor() {
    this.express = express();
    this.api = require('./config/api');
    this.initialConfigs();
  }

  async initialConfigs() {
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

  exceptionHandler() {
    this.express.use((err, req, res, next) => {
      const { status, data, errors } = err;
      
      if (!status) {
        logger.error(`An unexpected error occurred: ${err.stack || err.message || err}`)
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      return res.status(status).json(data || errors);
    });
  }
}

module.exports = new Server().express;