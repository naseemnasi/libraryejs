const express = require("express");
const chalk = require("chalk");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");

var app = new express();
var nav = [
    { link: '/', title: "Home" },
    { link: '/login', title: "login" },
    { link: '/signup', title: "Sing up" },
    { link: '/books', title: "Books" },
    { link: '/authers', title: "Authers" },
    { link: '/books/addbook', title: "ADD BOOK" }
];






app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}))
app.set("views", "./src/views");
app.set("view engine", "ejs");


const booksRouter = require('./src/routes/bookRoutes')(nav);//passing nav to booksRouter
const autherRoute = require('./src/routes/autherRout')(nav) //passing nav to aouther

app.use('/books', booksRouter);
app.use('/authers', autherRoute);



app.get("/", function (req, res) {
    res.render("home",
        {
            nav,
            title: "LIBRARY",

        });

});

app.listen(3000, function () {
    console.log("listerning to port" + chalk.green('3000'))
});