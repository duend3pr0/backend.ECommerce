import ProductSchema from '../../models/mongoose/productsSchema.js'
import Product from '../../../domain/entities/product.js';
import productsSchema from '../../models/mongoose/productsSchema.js';

class ProductRepository
{
 async paginate(criteria)
 {
  const { limit, page } = criteria;
  const productsDocuments = await productsSchema.paginate({}, {limit, page});
  
  const { docs, ...pagination} = productsDocuments;

  const products = docs.map(document=> new Product({
    id: document._id,
    title: document.title,
    description: document.description,
    code: document.code,
    price: document.price,
    status: document.status,
    stock: document.stock,
    category: document.category,
    thumbnail: document.thumbnail
  }));
  return {
    products,
    pagination
  };
 }

 async getOne(id)
 {
  const productDocument = await productsSchema.findOne({ _id: id });
  
  if(!productDocument) throw new Error('Product doesnt exist');
  
  return new Product({
    id: productDocument._id,
    title: productDocument.title,
    description: productDocument.description,
    code: productDocument.code,
    price: productDocument.price,
    status: productDocument.status,
    stock: productDocument.stock,
    category: productDocument.category,
    thumbnail: productDocument.thumbnail
  });
 }  

 async create(data)
 {
  const productDocument = await productsSchema.create(data);

  return new Product({
    id: productDocument._id,
    title: productDocument.title,
    description: productDocument.description,
    code: productDocument.code,
    price: productDocument.price,
    status: productDocument.status,
    stock: productDocument.stock,
    category: productDocument.category,
    thumbnail: productDocument.thumbnail
  })
 }

 async update(id, body)
 {
  const productDocument = await productsSchema.findOneAndUpdate( { _id: id }, body, { new: true} );
  
  if(productDocument) throw new Error('Product doesnt exist');

  return new Product({
    id: document._id,
    title: document.title,
    description: document.description,
    code: document.code,
    price: document.price,
    status: document.status,
    stock: document.stock,
    category: document.category,
    thumbnail: document.thumbnail
 });
}

    async delete(id) {
        try {
            const document = await ProductSchema.findByIdAndUpdate(id, { status: false }, { new: true });
            return new Product({
                id: document._id,
                title: document.title,
                description: document.description,
                code: document.code,
                price: document.price,
                status: document.status,
                stock: document.stock,
                category: document.category,
                thumbnail: document.thumbnail
            })
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default ProductRepository;