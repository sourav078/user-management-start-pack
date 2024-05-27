import prisma from '../../../shared/prisma';
import { IBrand } from './brand.interface';

// create brand
const createBrand = async (brand: IBrand) => {
  const result = await prisma.brand.create({
    data: brand,
  });
  return result;
};

// get all brands
const getAllBrands = async () => {
  const result = await prisma.brand.findMany();
  return result;
};

// get brand by id
const getBrandById = async (id: string) => {
  const result = await prisma.brand.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error('Brand not found');
  }

  return result;
};

// update brand
const updateBrand = async (id: string, payload: IBrand) => {
  // find brand by id
  const getBrand = await prisma.brand.findUnique({
    where: {
      id,
    },
  });

  // if brand not found
  if (!getBrand) {
    throw new Error('Brand not found');
  }

  const result = await prisma.brand.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

// delete brand

const deleteBrand = async (id: string) => {
  // find brand by id
  const brand = await prisma.brand.findUnique({
    where: {
      id,
    },
  });

  // if brand not found
  if (!brand) {
    throw new Error('Brand not found');
  }

  const result = await prisma.brand.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BrandService = {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};
