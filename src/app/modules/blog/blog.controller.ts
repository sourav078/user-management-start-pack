import catchAsync from '../../../shared/catchAsync';
import { BlogService } from './blog.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

// create blog
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = req.body;
  const result = await BlogService.createBlog(blog);
  sendResponse(res, {
    data: result,
    message: 'Blog created successfully',
    statusCode: httpStatus.CREATED,
    success: true,
  });
});

// get all blogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs();
  sendResponse(res, {
    data: result,
    message: 'All blogs fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// get blog by id

const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getBlogById(id);
  sendResponse(res, {
    data: result,
    message: 'Blog fetched successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// update blog

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const blog = req.body;
  const result = await BlogService.updateBlog(id, blog);
  sendResponse(res, {
    data: result,
    message: 'Blog updated successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

// delete blog

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlog(id);
  sendResponse(res, {
    data: result,
    message: 'Blog deleted successfully',
    statusCode: httpStatus.OK,
    success: true,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
