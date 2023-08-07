const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  user: {
    type: String,
    trim: true,
  },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
