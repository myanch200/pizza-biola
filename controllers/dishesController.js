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