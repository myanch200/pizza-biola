const userDao = require('../models/usersModel.js');
const dishesDAO = require("../models/dishesModel");
const db = new dishesDAO("../dishes.nedb");
exports.login_page = (req, res) => {
  res.render('users/login', {});
}

exports.login = (req, res) => {
  db.getAllDishes()
    .then(dishes => {
      res.render('dishes/index', {dishes: dishes,user:"user"});
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