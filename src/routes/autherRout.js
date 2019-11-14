var express = require('express');
var autherRoute = express.Router();


var authers = [{ name: "a1", dob: "01-02-12", imag: "AUTH.jpg" },
{ name: "a2", dob: "02-02-12", imag: "AUTH.jpg" },
{ name: "a3", dob: "03-02-12", imag: "AUTH.jpg" },
{ name: "a4", dob: "04-02-12", imag: "AUTH.jpg" },
{ name: "a5", dob: "05-02-12", imag: "AUTH.jpg" }];
function athrou(nav) {

    autherRoute.route("/").get(function (req, res) {
        res.render('authers.ejs', {
            nav,
            title: "Authers",
            authers
        });
    });
    autherRoute.route("/:id").get(function (req, res) {
        const id = req.params.id;
        res.render('auther.ejs', {
            nav,
            title: "Auther",
            auther: authers[id]
        })
    })

    return autherRoute;

}
module.exports = athrou;