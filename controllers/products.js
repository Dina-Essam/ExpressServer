const Product = require("../models/product");

module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: req.originalUrl,
    activeAddProduct: true,
    productCss: true,
    formsCSS: true,
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll( products => {
    res.render("shop", {
      products: products,
      path: req.originalUrl,
      hasProducts: products.length > 0,
      path: "/",
      activeShop: true,
      productCss: true,
    });
  })
};
