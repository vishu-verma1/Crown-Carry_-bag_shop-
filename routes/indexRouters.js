const express = require("express");
const router = express.Router(); // create a router object
const isLogedIn = require("../middlewares/isLogedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/users-models");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, logedin: false });
    // res.send("index hello");
});


router.get("/shop",isLogedIn, async (req, res) => {
  let success = req.flash("success");
  let products = await productModel.find();
  res.render("shop",{products, success,});
  
});

router.get("/cart",isLogedIn, async (req, res) => {
  let platformfee = 20;
 let user = await userModel.findOne({email: req.user.email}).populate("cart");
 res.render("cart",{user, platformfee});

  
});


router.get("/account",isLogedIn, async (req, res) => {
 let user = await userModel.findOne({email:req.user.email}).populate("cart");
 res.render("account",{user});

  
});



router.get("/addtocart/:productid",isLogedIn,async (req, res) => {
  
  let user = await userModel.findOne({email: req.user.email});
  user.cart.push(req.params.productid);
  await user.save();
 req.flash("success","Product added to cart");
  res.redirect("/shop");

});


module.exports = router;
