// create image gallery

import multer from 'multer';
import { Request, Response } from 'express';
import prisma from '../../../shared/prisma';

import fs from 'fs';

import { uploadMultipleImages, uploadSingleImage } from './gallary.utility';

const dir = './uploads';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// create single image
const createImage = async (req: Request, res: Response) => {
  try {
    const file: any = await uploadSingleImage(req, res, upload);
    if (!file) {
      throw new Error('File not found');
    }
    const image = file.path;
    const galleryImage = await prisma.gallery.create({ data: { image } });
    return galleryImage;
  } catch (err) {
    throw new Error("Couldn't create image");
  }
};

// create multiple images
const createMultipleImages = async (req: Request, res: Response) => {
  const files: any = await uploadMultipleImages(req, res, upload);
  if (!files) {
    throw new Error('Files not found');
  }
  const images = files.map((file: any) => file.path);
  const galleryImages = await prisma.gallery.createMany({
    data: images.map((image: string) => ({ image })),
  });

  return galleryImages;
};

// get all images
const getAllImages = async () => {
  const images = await prisma.gallery.findMany();
  return images;
};

// delete image from database also from uploads folder

const deleteImage = async (id: Number) => {
  const image = await prisma.gallery.findUnique({ where: { id: Number(id) } });
  if (!image) {
    throw new Error('Image not found');
  }
  const deletedImage = await prisma.gallery.delete({
    where: { id: Number(id) },
  });
  fs.unlinkSync(image.image);
  return deletedImage;
};

export const galleryService = {
  createImage,
  createMultipleImages,
  getAllImages,
  deleteImage,
};
