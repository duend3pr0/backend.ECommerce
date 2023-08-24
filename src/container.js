import dotenv from 'dotenv';
dotenv.config();

import { createContainer, asClass, Lifetime } from 'awilix';

import ProductsMongooseRepository from './data/repositories/mongoose/productsMongooseRepository.js'


const container = createContainer();

container.register('ProductsRepository',asClass(ProductsMongooseRepository), {Lifetime: Lifetime.SINGLETON});



export default container;