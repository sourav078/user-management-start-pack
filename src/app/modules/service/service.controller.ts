import catchAsync from '../../../shared/catchAsync';
import { ServiceService } from './service.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

// create service
const createService = catchAsync(async (req: Request, res: Response) => {
  const service = req.body;
  const result = await ServiceService.createService(service);
  sendResponse(res, {
    data: result,
    message: 'Service created successfully',
    statusCode: httpStatus.CREATED,
    success: true,
  });
});

// get all services
const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllServices();
  sendResponse(res, {
    data: result,
    message: 'All services fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// get service by id

const getServiceById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceService.getServiceById(id);
  sendResponse(res, {
    data: result,
    message: 'Service fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// update service

const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = req.body;
  const result = await ServiceService.updateService(id, service);
  sendResponse(res, {
    data: result,
    message: 'Service updated successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// delete service

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceService.deleteService(id);
  sendResponse(res, {
    data: result,
    message: 'Service deleted successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
