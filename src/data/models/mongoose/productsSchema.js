import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2'

const productCollection = 'products';

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description required'],
    },
    code: {
        type: String,
        required: [true, 'Code required'],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, 'Price required'],
    },
    status: {
        type: Boolean,
        default: true,
    },
    stock: {
        type: Number,
        required: [true, "Stock required"],
    },
    category: {
        type: String,
        required: [true, 'Category required'],
    },
    thumbnail: {
        type: Array,
    }

});
ProductSchema.plugin(paginate);

export default model(productCollection, ProductSchema);