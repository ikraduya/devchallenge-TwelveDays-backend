const Product = require('../models/Product');
const Talent = require('../models/Talent');

/**
  * GET api/product/products
  * req.query:
*/
exports.getAllProduct = (req, res) => {
  const productQuery = Product
    .find({})

  Promise.resolve(productQuery)
    .then((productList) => {
      return res.json({
        status: 'success',
        message: 'Get all product success',
        data: productList,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        status: 'error',
        message: 'Error while querying database',
      });
    });
};
