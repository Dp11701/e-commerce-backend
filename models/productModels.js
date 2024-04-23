const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock_quantity: { type: Number, require: true },
    sold_quantity: { type: Number, required: false },
    category_id: { type: String, required: true },
    cover: { type: String, required: false },
    description: { type: String, required: false },
  },
  { _id: false }
);

module.exports = mongoose.model("Product", productSchema);
