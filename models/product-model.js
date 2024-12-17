
const mongoosse = require("mongoose");

const productSchema = mongoosse.Schema({
  image: Buffer,
  name: String,

  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});

module.exports = mongoosse.model("product", productSchema);
