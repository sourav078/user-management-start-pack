import express from 'express';
import { ServiceController } from './service.controller';

const router = express.Router();

// create service
router.post('/', ServiceController.createService);
// get all services
router.get('/', ServiceController.getAllServices);
// get service by id
router.get('/:id', ServiceController.getServiceById);
// update service
router.patch('/:id', ServiceController.updateService);
// delete service
router.delete('/:id', ServiceController.deleteService);

export const serviceRoute = router;
