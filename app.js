const express=require("express");
const chalk=require("chalk");
const path=require("path");

var app=new express();
const booksRouter=express.Router();

var nav=[
            {link:'/',title:"Home"},
            {link:'/login',title:"login"},
            {link:'/signup',title:"Sing up"},
            {link:'/books',title:"Books"},
            {link:'/aouthers',title:"Aouthers"}
        ];

var book=[
        {title:'1stbook',genre:"1st genre",aouther:"a1"},
        {title:'2stbook',genre:"2st genre",aouther:"a2"},
        {title:'3stbook',genre:"3st genre",aouther:"a3"},
        {title:'4stbook',genre:"4st genre",aouther:"a4"},
        {title:'5stbook',genre:"5st genre",aouther:"a5"}
        ];
app.use('/books',booksRouter);


app.use(express.static(path.join(__dirname,"/public")));
app.set("views","./src/views");
app.set("view engine","ejs");
app.get("/",function (req,res){
    res.render("home",
    {
        nav,
        title:"library",
        
    });

});

app.listen(3000,function(){
    console.log("listerning to port"+chalk.green('3000'))
});

booksRouter.route('/')
.get((req,res)=>{
    res.render('books',{
        nav,
        title:"library",
        book
    })
})