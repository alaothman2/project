const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const id = decoded.userid;
    const user = await User.findById(id);
    res.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = isAuth;
