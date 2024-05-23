const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  customer_id: { type: Number, required: true },
  order_date: { type: String, require: true },
  status: { type: String, require: true },
});

module.exports = mongoose.model("Orders", ordersSchema);
