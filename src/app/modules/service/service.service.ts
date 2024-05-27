import prisma from '../../../shared/prisma';
import { IService } from './service.interface';

// create service
const createService = async (serviceData: IService) => {
  // create service
  const result = await prisma.service.create({
    data: serviceData,
  });
  return result;
};

// get all services
const getAllServices = async () => {
  // get all services
  const result = await prisma.service.findMany();
  return result;
};

// get service by id
const getServiceById = async (id: string) => {
  // get service by id
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error('Service not found');
  }

  return result;
};

// update service

const updateService = async (id: string, serviceData: IService) => {
  // get service by id
  const service = await prisma.service.findUnique({
    where: {
      id,
    },
  });

  if (!service) {
    throw new Error('Service not found');
  }

  // update service
  const result = await prisma.service.update({
    where: {
      id,
    },
    data: serviceData,
  });

  return result;
};

// delete service

const deleteService = async (id: string) => {
  // get service by id
  const service = await prisma.service.findUnique({
    where: {
      id,
    },
  });

  if (!service) {
    throw new Error('Service not found');
  }

  // delete service
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });

  return result;
};





export const ServiceService = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
