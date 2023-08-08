const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    
  },
  description: {
    trim: String,
    
  },
});


const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
