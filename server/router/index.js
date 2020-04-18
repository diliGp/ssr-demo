import express from 'express';
import MainView from '../views/Main';

const routes = express.Router();

routes.get('*', MainView);

export default routes;