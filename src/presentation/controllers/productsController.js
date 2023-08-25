import ProductsManager from '../../domain/managers/productManager.js';


export const list = async(req, res, next) =>
{
  try
  {
    const { limit, page } = req.query;
    const manager = new ProductsManager();
    const products = await manager.paginate({limit, page})
    
    res.send({status: 'succes', products: products.docs, ...products, docs:undefined});    
  }
  catch (error)
  {
  next(error) 
  }
}

export const getOne = async(req, res, next) =>
{
  try
  {
    const { id } = req.params;

    const manager = new ProductsManager();
    const product = await manager.getOne(id)
    
    res.send({status: 'succes', product});    
  }
  catch (error)
  {
   next(error) 
  }
}

export const save = async(req, res, next) =>
{
  try
  {
   const manager = new ProductsManager();   
   const product = await manager.create(req.body);
    
   res.send({status: 'succes', product, message: 'Product created.'});    
  }
  catch (error)
  {
   next(error) 
  }
};

export const updateOne = async(req, res, next) =>
{
  try
  {
   const { id } = req.params;
   const { data } = req.body;
   
   const manager = new ProductsManager();   
   const product = await manager.updateOne(id, data);
    
   res.send({status: 'succes', product, message: 'Product updated.'});    
  }
  catch (error)
  {
   next(error) 
  }
};




