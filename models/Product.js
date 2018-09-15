const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  diff: Number
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
