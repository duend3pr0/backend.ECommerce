import z from 'zod';

const productCreateValidation = z.object({
  title: z.string().min(2).max(35),
  description: z.string().min(2).max(35),
  code: z.string().min(2).max(30),
  price: z.number().min(0.01).max(999999),
  stock: z.number().min(1).max(999999),
  category: z.string().min(2).max(35),
  thumbnail: z.array(),

});

export default productCreateValidation;