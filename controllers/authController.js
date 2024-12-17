const userModel = require("../models/users-models"); // import the user model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { genrateToken } = require("../utils/genrateToken");

module.exports.userRegister = async (req, res) => {
  try {
    let { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      const error = "Please fill all the fields";
      return res.render("index", { error });
    }

    let user = await userModel.findOne({ email });

    if (user) return res.status(401).send("User already exists ");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.massage);
        else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          });

          let token = genrateToken(user);
          res.cookie("token", token);
          res.redirect("/shop");
        }
      });
    });
  } catch (err) {
    console.log(err.message);
    // Handle database or server errors
    res
      .status(500)
      .send({ message: "Internal Server Error", error: err.message });
  }
};

module.exports.userLogin = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password)
    return res.status(401).send("Please fill all the fields");
  let user = await userModel.findOne({ email });
  if (!user) return res.status(401).send("User not found");
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = genrateToken(user);
      res.cookie("token", token);
      res.redirect("/shop");
    } else {
      res.status(401).send("Invalid email or password");
    }
  });
};



module.exports.userLogout = async (req, res) => {
  res.cookie("token", ""); // clear the token
  res.redirect("/");
};