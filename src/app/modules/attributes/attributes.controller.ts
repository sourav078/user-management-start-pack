// create attribute

import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { AttributesService } from './attributes.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAttributes = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await AttributesService.createAttributes(body);

  sendResponse(res, {
    data: result,
    message: 'Attribute created successfully',
    statusCode: httpStatus.CREATED,
    success: true,
  });
});

// get all attributes
const getAttributes = catchAsync(async (req: Request, res: Response) => {
  const result = await AttributesService.getAttributes();

  sendResponse(res, {
    data: result,
    message: 'All attributes fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// get attributes by id

const getAttributesById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AttributesService.getAttributesById(id);

  sendResponse(res, {
    data: result,
    message: 'Attribute fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// update attributes

const updateAttributes = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const result = await AttributesService.updateAttributes(id, body);

  sendResponse(res, {
    data: result,
    message: 'Attribute updated successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// delete attributes

const deleteAttributes = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AttributesService.deleteAttributes(id);

  sendResponse(res, {
    data: result,
    message: 'Attribute deleted successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

export const AttributesController = {
  createAttributes,
  getAttributes,
  getAttributesById,
  updateAttributes,
  deleteAttributes,
};
