const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine' , 'pug'); //using temple engine pug
app.set('views' , 'views/pug'); // the html files directory

app.use(bodyParser.urlencoded({ extended: false })); // next in the end so it will enter middleware in line
app.use(express.static(path.join(rootDir , 'public')));

app.use('/admin' , adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
});
app.listen(3000);
