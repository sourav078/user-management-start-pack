import prisma from '../../../shared/prisma';
import { IBlog } from './blog.interface';

// create blog
const createBlog = async (blogData: IBlog) => {
  // create blog
  const result = await prisma.blog.create({
    data: blogData,
  });
  return result;
};

// get all blogs
const getAllBlogs = async () => {
  // get all blogs
  const result = await prisma.blog.findMany();
  return result;
};

// get blog by id
const getBlogById = async (id: string) => {
  // get blog by id
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error('Blog not found');
  }

  return result;
};

// update blog

const updateBlog = async (id: string, blogData: IBlog) => {
  // get blog by id
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    throw new Error('Blog not found');
  }

  // update blog
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: blogData,
  });

  return result;
};

// delete blog

const deleteBlog = async (id: string) => {
  // get blog by id
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    throw new Error('Blog not found');
  }

  // delete blog
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });

  return result;
};







export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
