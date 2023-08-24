import ProductsManager from '../../domain/managers/productManager.js';


export const getAll = async(req, res, next) =>
{
  try
  {
    const manager = new ProductsManager();
    const products = await manager.paginate()
    
    res.send({status: 'succes', products: products.docs, ...products, docs:undefined});    
  }catch (error)
  {
   next(error) 
  }
}