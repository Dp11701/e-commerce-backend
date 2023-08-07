const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    category: { type: String, required: true },
    cover: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
);

module.exports = mongoose.model("Product", productSchema);
