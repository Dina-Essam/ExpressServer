const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require('express-handlebars');

const app = express();

// app.set('view engine' , 'pug'); //using temple engine pug
// app.set('views' , 'views/pug'); // the html files directory
app.engine('hbs', expressHbs.engine({
    defaultLayout:'main-layout',
    extname:'hbs',
    layoutsDir:'views/handlebars/layouts'
}));
app.set("view engine", 'hbs'); //using temple engine handlebars
app.set("views", "views/handlebars"); // the html files directory

app.use(bodyParser.urlencoded({ extended: false })); // next in the end so it will enter middleware in line
app.use(express.static(path.join(rootDir, "public")));
 app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(3000);
