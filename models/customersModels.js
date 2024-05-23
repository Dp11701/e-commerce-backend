const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  _id: { type: String, require: true },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
