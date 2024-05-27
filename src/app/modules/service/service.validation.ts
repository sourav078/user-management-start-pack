import { z } from 'zod';

const ServiceSchema = z.object({
  title: z.string().nonempty({
    message: 'Title is required',
  }),
  description: z.string().nonempty({
    message: 'Description is required',
  }),
  image: z.string().optional(),
  is_active: z.boolean().optional(),
//   serviceCategoryId: z.string().nonempty({
//     message: 'Category is required',
//   }),
});

export default ServiceSchema;
