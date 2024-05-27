import prisma from '../../../shared/prisma';
import { IProduct } from './products.interface';

// create product
// const createProduct = async (product: IProduct) => {
//   const result = await prisma.product.create({
//     data: {
//       ...product,
//       brand: {
//         connect: {
//           id: product.brandId,
//         },
//       },
//       outlet: {
//         create: product.outlet,
//       },

//       productCategory: {
//         create: product.productCategory,
//       },
//       productAttribute: {
//         create: product.productAttribute,
//       },
//     },
//   });
// };
