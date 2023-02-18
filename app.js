const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

/**Using pug template engine
 app.set('view engine' , 'pug'); //using template engine pug
 app.set('views' , 'views/pug'); // the html files directory 
*/

/**
 *  Using Handlebars template engine

    const expressHbs = require('express-handlebars');
    app.engine('hbs', expressHbs.engine({
        defaultLayout:'main-layout',
        extname:'hbs',
        layoutsDir:'views/handlebars/layouts'
    }));
    app.set("view engine", 'hbs'); //using template engine handlebars
    app.set("views", "views/handlebars"); // the html files directory
*/
app.set("view engine", "ejs"); //using template engine ejs
app.set("views", "views/ejs"); // the html files directory

app.use(bodyParser.urlencoded({ extended: false })); // next in the end so it will enter middleware in line
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(3000);
