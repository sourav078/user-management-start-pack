import prisma from '../../../shared/prisma';
import { IBlogCategory } from './blogCategory.interface';

// create blog Category
const createBlogCategory = async (blogCategoryData: IBlogCategory) => {
  // create blog
  const result = await prisma.blogCategory.create({
    data: blogCategoryData,
  });
  return result;
};

// get all blogs Category
const getAllBlogsCategory = async () => {
  // get all blogs Category
  const result = await prisma.blogCategory.findMany();
  return result;
};

// get blog Category by id
const getBlogCategoryById = async (id: string) => {
  // get blog Category by id
  const result = await prisma.blogCategory.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error('Blog Category not found');
  }

  return result;
};

// update blog

const updateBlogCategory = async (id: string, blogData: IBlogCategory) => {
  // get blog by id
  const blog = await prisma.blogCategory.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    throw new Error('Blog Category not found');
  }

  // update blog
  const result = await prisma.blogCategory.update({
    where: {
      id,
    },
    data: blogData,
  });

  return result;
};

// delete blogCategory

const deleteBlogCategory = async (id: string) => {
  // get blog by id
  const blog = await prisma.blogCategory.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    throw new Error('Blog Category not found');
  }

  // delete blog Category
  const result = await prisma.blogCategory.delete({
    where: {
      id,
    },
  });

  return result;
};

export const BlogServiceCategory = {
  createBlogCategory,
  getAllBlogsCategory,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory,
};
