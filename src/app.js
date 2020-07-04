import express from 'express';
import cors from 'cors';
import Youch from 'youch';

import 'express-async-errors';
import routes from './routes';

import CreateLogsService from './app/services/system/CreateLogsService';

const { errors } = require('celebrate');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionSystem();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionSystem() {
    this.server.use(async (error, req, res, next) => {
      const errorsJson = await new Youch(error, req).toJSON();
      await CreateLogsService.create({
        user_id: req.userId,
        action: 'Error',
        log: errorsJson,
      });

      return res.status(400).json(error);
    });
  }
}

export default new App().server;
