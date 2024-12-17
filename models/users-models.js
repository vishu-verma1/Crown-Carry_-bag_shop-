const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  order: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: Buffer, // Consider correcting "pictrue" to "picture" if it's a typo
});

module.exports = mongoose.model("user", userSchema);
