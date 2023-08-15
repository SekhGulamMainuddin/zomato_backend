const express = require("express");
const UserModel = require("../models/userModel");

const authRouter = express.Router();

authRouter.post("/create-user", async (req, res) => {
  try {
    console.log(req.body);
    const { userId, name, email, phone, profileImage, address } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User exists with same email" });
    }

    let user = new UserModel({
      userId: userId,
      name: name,
      email: email,
      phone: phone,
      profileImage: profileImage,
      address: address,
    });
    
    user= await user.save();
    return res.json(user);
  } catch (e) {
    res.status(500).json({error: e.message});
  }
});

module.exports = authRouter;