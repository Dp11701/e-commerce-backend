const mongoose = require("mongoose");

const orderDetailsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  order_id: { type: String, required: true },
  product_id: { type: String, require: true },
  quantity: { type: Number, require: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("OrdersDetail", orderDetailsSchema);
