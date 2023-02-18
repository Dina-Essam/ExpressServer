const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    let products = [];
    if (!err) {
      products = JSON.parse(fileContent);
    }
    return callback(products);
  });
};

module.exports = class product {
  constructor(title) {
    this.title = title;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
