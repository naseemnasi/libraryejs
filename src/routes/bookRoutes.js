var express = require('express');
var booksRouter = express.Router();




var books = [
    { title: '1stbook', genre: "1st genre", auther: "a1", img: "billgates.jpg.jpg" },
    { title: '2stbook', genre: "2st genre", auther: "a2", img: "billgates.jpg.jpg" },
    { title: '3stbook', genre: "3st genre", auther: "a3", img: "billgates.jpg.jpg" },
    { title: '4stbook', genre: "4st genre", auther: "a4", img: "billgates.jpg.jpg" },
    { title: '5stbook', genre: "5st genre", auther: "a5", img: "billgates.jpg.jpg" }
];

function router(nav) {
    booksRouter.route('/')
        .get((req, res) => {
            res.render('books.ejs', {
                nav,
                title: "BOOKS",
                books
            })
        })


    booksRouter.route("/addbook").get(function (req, res) {
        res.render('addbook.ejs',
            {
                nav,
                title: "Add Book",
                books

            })
    })

    booksRouter.route("/save").post(function (req, res) {
        res.send('save lksfgisgjk'), 
        //     nav,
        //     title: "YOUR CONTENTS ARE SAVED",
        //     books
        console.log(req.body)
        
    })


    booksRouter.route('/:id').get(function (req, res) {
        const id = req.params.id;
        res.render('book', {
            nav,
            title: "BOOKS",
            book: books[id]
        })
    })
    return booksRouter;
}
module.exports = router;