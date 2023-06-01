const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");

// register a user
router.post("/register", async (req, res) => {
  let { username, email, password, role, Phone } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ username, email, password: hashedPassword, role, Phone });
    await user.save();
    const token = jwt.sign({ userid: user._id }, process.env.SECRET_KEY, {
      expiresIn: "15 minutes",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
});
// login  user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = jwt.sign({ userid: user._id }, process.env.SECRET_KEY, {
      expiresIn: "15 minutes",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// getting the auth user
router.get("/profile", isAuth, async (req, res) => {
  try {
    const user = res.user;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// delete user
router.delete("/delete-user/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
});
// update user
router.put("/update-profil/:id", isAuth, async (req, res) => {
  const  id  = req.params.id;
  const { email, username, password , Phone} = req.body;

  try {
    const user = await User.findById(id);
    const hashedPassword = await bcrypt.hash(password, 10);
    user.email = email;
    user.username = username;
    user.password = hashedPassword;
    user.Phone = Phone 
    await user.save();
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get all the users
router.get("/users", isAuth, isAdmin, async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "can not get users" });
  }
});
module.exports = router;
