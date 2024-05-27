import prisma from '../../../shared/prisma';
import { ICategory } from './category.interface';
import getCategoryWithChildren from './category.utility';

const getAllCategories = async () => {
  // get all categories
  const categories = await prisma.category.findMany({
    where: {
      parent_id: null,
    },
    include: {
      children: true,
      parent: false,
      ProductCategory: false,
      Order: false,
    },
  });

  for (let i = 0; i < categories.length; i++) {
    categories[i] = await getCategoryWithChildren(categories[i].id);
  }

  return categories;
};

// create category
const createCategory = async (categoryData: ICategory) => {
  // check slug is unique
  const category = await prisma.category.findFirst({
    where: {
      slug: categoryData.slug,
    },
  });

  if (category) {
    throw new Error('Category with this slug already exists');
  }

  // create category
  const result = await prisma.category.create({
    data: categoryData,
    include: {
      children: true,
      parent: false,
      ProductCategory: true,
      Order: true,
    },
  });

  return result;
};

// get category by id
const getCategoryById = async (id: string) => {
  // get category by id
  let result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      children: true,
      parent: false,
      ProductCategory: false,
      Order: false,
    },
  });

  if (!result) {
    throw new Error('Category not found');
  }

  result = await getCategoryWithChildren(result.id);

  return result;
};

// update category

const updateCategory = async (id: string, categoryData: ICategory) => {
  // get category by id
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new Error('Category not found');
  }

  // update category
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: categoryData,
    include: {
      children: true,
      parent: false,
      ProductCategory: false,
      Order: false,
    },
  });

  return result;
};

// delete category

const deleteCategory = async (id: string) => {
  // get category by id
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new Error('Category not found');
  }

  // delete category
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });

  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
