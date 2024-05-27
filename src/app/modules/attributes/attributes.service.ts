import prisma from '../../../shared/prisma';
import { IAttribute } from './attributes.interface';

// create attributes
const createAttributes = async (attributes: IAttribute) => {
  const result = prisma.attribute.create({
    data: {
      name: attributes.name,
      is_active: attributes.is_active,
      AttributeValue: {
        create: attributes.attributeValue,
      },
    },
    include: {
      AttributeValue: true,
    },
  });

  return result;
};

// get all attributes
const getAttributes = async () => {
  const result = prisma.attribute.findMany({
    include: {
      AttributeValue: true,
    },
  });

  return result;
};

// get attributes by id

const getAttributesById = async (id: string) => {
  const result = prisma.attribute.findUnique({
    where: {
      id,
    },
    include: {
      AttributeValue: true,
    },
  });

  if (!result) {
    throw new Error('Attributes not found');
  }

  return result;
};

// update attributes

const updateAttributes = async (id: string, attributes: IAttribute) => {
  // check if attributes exist
  const checkAttributes = await prisma.attribute.findUnique({
    where: {
      id,
    },
  });

  if (!checkAttributes) {
    throw new Error('Attributes not found');
  }

  const result = prisma.attribute.update({
    where: {
      id,
    },
    data: {
      name: attributes.name,
      is_active: attributes.is_active,
      AttributeValue: {
        deleteMany: {},
        create: attributes.attributeValue,
      },
    },
    include: {
      AttributeValue: true,
    },
  });

  return result;
};

// delete attributes

const deleteAttributes = async (id: string) => {
  // check if attributes exist
  const checkAttributes = await prisma.attribute.findUnique({
    where: {
      id,
    },
  });

  if (!checkAttributes) {
    throw new Error('Attributes not found');
  }

  // First, delete the AttributeValues
  await prisma.attributeValue.deleteMany({
    where: {
      attributeId: id,
    },
  });

  const result = prisma.attribute.delete({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error('Attributes not found');
  }

  return result;
};

export const AttributesService = {
  createAttributes,
  getAttributes,
  getAttributesById,
  updateAttributes,
  deleteAttributes,
};
