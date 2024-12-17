const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require("./config/mongoose-connection")
const expressSession = require("express-session")
const flash = require("connect-flash");

const ownersRouter = require('./routes/ownersRouters');
const productsRouter = require('./routes/productsRouters');
const usersRouter = require('./routes/usersRouters');
const indexRouter = require('./routes/indexRouters');

require("dotenv").config(); // to use the .env file

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({resave:false,saveUninitialized: false,secret: process.env.EXPRESS_SESSION_SECRET,})); // this is the session
app.use(flash());   // this is the flash message 
app.set('view engine', 'ejs');


// handling Routes 
app.use("/owners",ownersRouter); // this is the route for owner
app.use("/users",usersRouter); // this is the route for user
app.use("/products",productsRouter); // this is the route for products
app.use("/",indexRouter,); // this is the route for index


app.listen(3000);