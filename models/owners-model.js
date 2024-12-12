
const mongoosse = require("mongoose");

const ownerSchema = mongoosse.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  pictrue: String,
  gtin: String,
});

module.exports = mongoosse.model("owner", ownerSchema);
