import express, { request } from 'express'
import PointsController from './controllers/pointsController';
import ItemController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController;
const itemController = new ItemController;

routes.get('/items', itemController.index );

routes.post('/points', pointsController.create );
routes.get('/points/:id', pointsController.show );
routes.get('/points', pointsController.index );

export default routes;

//index show create update delete