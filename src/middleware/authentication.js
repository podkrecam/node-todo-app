"use strict";
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// authenticate user function
const authentication = async (req, res, next) => {
  try {
    // get token from the user's request Authorization header
    const token = req.header("Authorization").replace("Bearer ", "");
    // decode sent token using jwt.verify()
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // find the user by decoded id and check token in the tokens array
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    // set the token and user to request
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = authentication;
