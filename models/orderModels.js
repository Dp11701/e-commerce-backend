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
        _id: false,
        quantity: {
          type: Number,
          required: [true, "Please add the quantity"],
        },
        itemId: {
          type: Number,
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
