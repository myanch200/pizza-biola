const userDao = require('../models/usersModel.js');
const dishesDAO = require("../models/dishesModel");
const db = new dishesDAO();
exports.login_page = (req, res) => {
  res.render('users/login', {});
}

exports.login = (req, res) => {
  db.getAllDishes()
    .then(dishes => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    }); 
}

exports.logout = (req, res) => {
  console.log("logout");
  res.clearCookie("jwt");
  res.redirect('/');
}