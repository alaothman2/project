const isAdmin = (req, res, next) => {
  if (res.user.role === "user") {
    return { message: "access denied, you must be an admin" };
    
  }
  next();
};

module.exports = isAdmin;
