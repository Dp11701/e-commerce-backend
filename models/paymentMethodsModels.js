const mongoose = require("mongoose");

const paymentMethodsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, require: true },
});

module.exports = mongoose.model("PaymentMethods", paymentMethodsSchema);
