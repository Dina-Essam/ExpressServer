const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // next in the end so it will enter middleware in line

app.use('/admin' , adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname , 'views', '404.html'));
});
app.listen(3000);
