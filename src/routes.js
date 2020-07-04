import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import SystemController from './app/controllers/SystemController';

import UserUpdateValidator from './app/validators/UserUpdateValidator';
import UserCreateValidator from './app/validators/UserCreateValidator';
import SessionValidator from './app/validators/SessionValidator';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserCreateValidator, UserController.create);
routes.post('/sessions', SessionValidator, SessionController.create);

routes.use(authMiddleware);
routes.get('/logs', SystemController.index);
routes.put('/profile', UserUpdateValidator, UserController.update);
routes.get('/categories', CategoryController.index);
routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.delete('/products/:id', ProductController.delete);
routes.put('/products/:id', ProductController.update);

export default routes;
