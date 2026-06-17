import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['interior', 'exterior', 'specialty'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  description: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
  },
  longDescription: {
    type: String,
    trim: true,
    default: '',
  },
  packSizes: {
    type: [String],
    default: ['20 Ltr', '10 Ltr', '4 Ltr', '1 Ltr'],
  },
  image: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
