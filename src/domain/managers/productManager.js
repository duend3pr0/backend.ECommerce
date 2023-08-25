import container from "../../container.js";

import productCreateValidation from  '../validations/product/productCreateValidation.js'
import productUpdateValidation from  '../validations/product/productCreateValidation.js'

class ProductsManager
{
 constructor()
 {
    this.productsRepository = container.resolve('ProductsRepository');
 }
 
 async paginate(criteria)
 {
  return this.productsRepository.paginate(criteria);
 }

 async getOne(id)
 {
   return this.productsRepository.getOne(id)
 }

 async create(data)
 {
   await productCreateValidation.parseAsync(data);
   
   const product = await this.productsRepository.create(data);

   return product;
 }

 async updateOne(id, data)
 {
   await productUpdateValidation.parseAsync({ ...data, id });
   
   return this.productsRepository.updateOne( id,{...data})
 }



}

export default ProductsManager;