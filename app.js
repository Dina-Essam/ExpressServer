const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // next in the end so it will enter middleware in line

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
