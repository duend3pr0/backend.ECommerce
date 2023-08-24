import container from "../../container.js";

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
}

export default ProductsManager;