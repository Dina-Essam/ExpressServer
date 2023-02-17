const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products: products,
    path: req.originalUrl,
    hasProducts: products.length > 0,
    path: "/",
    activeShop: true,
    productCss: true
  });
});

module.exports = router;
