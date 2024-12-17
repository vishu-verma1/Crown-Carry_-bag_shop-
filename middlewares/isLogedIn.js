const jwt = require("jsonwebtoken");    
const userModel = require("../models/users-models");


module.exports = async (req, res, next) =>{
    if(!req.cookies.token){
        req.flash("error","Please login first");
        return res.redirect("/");
    }

    try{
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({email:decoded.email}).select("-password");

        if (!user) {
            req.flash("error", "User not found. Please login again.");
            return res.redirect("/");
        }


        req.user = user;
        next();
    } catch(err){
        req.flash("error","Please login first");
        res.redirect("/");
    }
}