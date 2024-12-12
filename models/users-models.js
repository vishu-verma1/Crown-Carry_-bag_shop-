const mongoosse = require("mongoose");



const userSchema = mongoosse.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  order: {
    type: Array,
    default: [],
  },
  contact: Number,
  pictrue: String,
});

module.exports = mongoosse.model("user", userSchema);
