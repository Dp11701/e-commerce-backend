const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please add the user name"],
    },
    fullName: {
      type: String,
      require: [false, "Please add the full name"],
    },
    phone: {
      type: Number,
      require: [false, "Please add the phone"],
    },
    email: {
      type: String,
      require: [true, "Please add the user email"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      require: [true, "Please add the user password"],
    },
    role: {
      type: Number,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
