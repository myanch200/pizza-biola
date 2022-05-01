const dishesDAO = require("../models/dishesModel");
const db = new dishesDAO();

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
      console.log(dish);
      res.render('dishes/detail', {dish: dish});
    })
    .catch(err => {
      console.log(err);
    });
};


exports.test = (req, res) => {
  res.send('Hello from the test controller!');
};