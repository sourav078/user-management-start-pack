import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

// create category
const createCategory = catchAsync(async (req: Request, res: Response) => {
  const category = req.body;
  const result = await CategoryService.createCategory(category);
  sendResponse(res, {
    data: result,
    message: 'Category created successfully',
    statusCode: httpStatus.CREATED,
    success: true,
  });
});

// get all categories
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories();
  sendResponse(res, {
    data: result,
    message: 'All categories fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// get category by id
const getCategoryById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.getCategoryById(id);

  sendResponse(res, {
    data: result,
    message: 'Category fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// update category

const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = req.body;
  const result = await CategoryService.updateCategory(id, category);
  sendResponse(res, {
    data: result,
    message: 'Category updated successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// delete category

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(id);
  sendResponse(res, {
    data: result,
    message: 'Category deleted successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
