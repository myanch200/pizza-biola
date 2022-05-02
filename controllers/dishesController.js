const dishesDAO = require("../models/dishesModel");
const db = new dishesDAO();
const bcrypt = require('bcrypt');

db.init();
exports.index = (req, res) => {
  db.getAllDishes()
    .then(dishes => {
      res.render('dishes/index', { dishes });
    })
    .catch(err => {
      console.log(err);
    });
};

 exports.allDishes = (req, res) => {
    db.getAllDishes()
      .then(dishes => {
        res.render('dishes/index', {dishes: dishes});
      })
      .catch(err => {
        console.log(err);
      });
};

exports.dishDetail = (req, res) => {
  
  db.getDish(req.params.id)
    .then(dish => {
      res.render('dishes/detail', {dish: dish});
    })
    .catch(err => {
      console.log(err);
    });
};


exports.test = (req, res) => {
  res.send('Hello from the test controller!');
};

exports.aboutUs = (req, res) => {
  res.render('dishes/about',{});
}

exports.menu_page = (req, res) => {
  db.getAllDishes()
    .then(dishes => {
      let pizzas = dishes.filter(dish => dish.category === 'pizza');
      let pasta = dishes.filter(dish => dish.category === 'pasta');
      console.log(pasta)
      res.render('dishes/menu', {pizzas: pizzas, pastas: pasta});
    })
    .catch(err => {
      console.log(err);
    });
}