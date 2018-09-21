const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  rank: Number,
  diff: Number
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
