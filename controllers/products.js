const products = [];

module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: req.originalUrl,
    activeAddProduct: true,
    productCss: true,
    formsCSS: true,
  });
};

module.exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

module.exports.getProducts = (req, res, next) => {
  res.render("shop", {
    products: products,
    path: req.originalUrl,
    hasProducts: products.length > 0,
    path: "/",
    activeShop: true,
    productCss: true,
  });
};
