const mongoose = require("mongoose");
const userModel = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
      message: "Enter a valid email",
    },
  },
  phone: {
    type: Number,
    required: false,
    validate: {
      validator: (value) => {
        return value.toString().length == 10;
      },
      message: "Enter a valid Indian number",
    },
  },
  profileImage: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("UserModel", userModel);

module.exports = UserModel;
