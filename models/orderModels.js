const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      ref: "Users",
    },
    deliveryAddress: {
      type: String,
      required: [true, "Please add the delivery address"],
    },
    shipMethod: {
      type: String,
      required: [true, "Please add the ship method"],
    },
    phone: {
      type: Number,
      ref: "Users",
    },
    email: {
      type: String,
      ref: "Users",
    },
    orderItems: {
      type: Array,
      required: [true, "Please add the order items"],
    },
    quantity: {
      type: Array,
      required: [true, "Please add the quantity"],
    },
    itemName: {
      type: Array,
      required: [true, "Please add the item name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
