const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require("./config/mongoose-connection")
const ownersRouter = require('./routes/ownersRouters');
const productsRouter = require('./routes/productsRouters');
const usersRouter = require('./routes/usersRouters');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.set('view engine', 'ejs');


// handling Routes 
app.use("/owners",ownersRouter); // this is the route for owner
app.use("/users",usersRouter); // this is the route for user
app.use("/products",productsRouter); // this is the route for products


app.listen(3000);