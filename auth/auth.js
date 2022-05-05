/*
NOTE!
This code and most of the authethication logic is taken from lab 9 of the course.
Although I have made some changes to the code full credit goes to the original @Fiona Fairlie .

*/

const bcrypt = require("bcryptjs");
const userModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");



exports.login = function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  userModel.lookup(email, function (err, user) {
    if (err) {
      console.log(`Could not find user with email ${email}`);
      res.redirect("/login");
    }
    if (!user) {
      return res.render("/login");
    }
  
    bcrypt.compare(password, user.password, function (err, result) {
      if(!result) {
        return res.render("/login");
      }
      
      let payload = { email: user.email };
      let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "14d",
        });
      res.cookie("jwt", accessToken);
      next();
      
    });
  });
};

exports.verify = function (req, res, next) {
  let accessToken = req.cookies.jwt;
  if (!accessToken) {
      return res.redirect("/login");
  }
  let payload;
  try {
    payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (e) {
    res.status(401).send();
  }
};
