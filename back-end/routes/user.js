const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../Middlewares/isAuth");
const isAdmin = require("../Middlewares/isAdmin");
const nodemailer = require("nodemailer");
const generateCode = require("../utilisation/generateCode");
const { isValid } = require("../Middlewares/isValidCode");
const Order = require("../Models/Order");
// register a user
router.post("/register", async (req, res) => {
  let { username, email, password, role, Phone, birthday } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      email,
      password: hashedPassword,
      role,
      Phone,
      birthday,
    });
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
      expiresIn: "2days",
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
router.put("/update-profil", isAuth, async (req, res) => {
  const id = res.user._id;
  const { email, username, password, Phone, birthday } = req.body;
  try {
    const user = await User.findById(id);
    const hashedPassword = await bcrypt.hash(password, 10);
    user.email = email || user.email;
    user.username = username || user.username;
    user.password = hashedPassword;
    user.Phone = Phone || user.Phone;
    user.birthday = birthday || user.birthday;
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
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
// forget password
router.post("/forget-password", async (req, res) => {
  try {
    const { email } = req.body;
    const olduser = await User.findOne({ email });
    if (!olduser) return res.status(404).json({ message: "user not found" });
    const code = generateCode();
    let Transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "oalaa1883@gmail.com",
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });
    const mailOption = {
      from: "services technique",
      to: email,
      subject: "rest your Password",
      text: ` hello ${olduser.username} please copy this code to restore your password : ${code}`,
    };

    Transport.sendMail(mailOption, function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const hashedCode = await bcrypt.hash(code, 8);
    olduser.code = hashedCode;
    console.log(hashedCode, olduser.code);

    await olduser.save();
    res.status(200).json({ message: "check your email ", userID: olduser._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/:userID/validate-code", isValid, async (req, res) => {
  const user = res.user;
  try {
    const token = jwt.sign({ userid: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5 minutes",
    });

    res.status(200).json(token);
  } catch (error) {}
});
router.put("/update-password", isAuth, async (req, res) => {
  const id = res.user._id;
  const { password } = req.body;
  try {
    const user = await User.findById(id);
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "password updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/orders",isAuth, isAdmin,  async (req, res) => {
  try {
      const orders = await Order.find().populate("products.product", "name price image")
      res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/order", isAuth,  async (req, res) => {
  try {
    const { cart , total ,email } = req.body;
    const order = new Order({
      products:[], total, email
    })
    cart.map((prod) => {
      order.products.push({product :prod._id , count : prod.count});
    })

    await order.save();
    res.status(200).json({message: "order created successfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
