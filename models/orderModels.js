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
    orderItems: [
      {
        quantity: {
          type: Number,
          required: [true, "Please add the quantity"],
        },
        itemId: {
          type: String,
          required: [true, "Please add the item id"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
