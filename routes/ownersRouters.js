const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if(owner.length > 0){
      res.status(504).send("You don't have permission to create new owner.");
    }

    const { fullname, email, password } = req.body;

    let createdOwner= await ownerModel.create({
        fullname,
        email,
        password,
    })
    res.status(201).send(createdOwner);

  });
}


router.get("/", (req, res) => {
  res.send("Hello from owners router");
});

router.get("/admin", (req, res) => {
  let success = req.flash("success");
  res.render("createproducts",{success});
});

// console.log(process.env.NODE_ENV)


module.exports = router;
