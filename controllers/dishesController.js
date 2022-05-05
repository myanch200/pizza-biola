const dishesDAO = require("../models/dishesModel");
const db = new dishesDAO("dishes.nedb");
const bcrypt = require('bcrypt');

db.init();
exports.index = (req, res) => {
  let user = null
  if(req.cookies.jwt){
    user = "user"
  }

  db.getAllDishes()
    .then(dishes => {
      res.render('dishes/index', { dishes:dishes, user:user });
    })
    .catch(err => {
      console.log(err);
    });
};

 exports.allDishes = (req, res) => {
  let user = null
  if(req.cookies.jwt){
    user = "user"
  }

    db.getAllDishes()
      .then(dishes => {
        res.render('dishes/index', {dishes: dishes, user:user});
      })
      .catch(err => {
        console.log(err);
      });
};

exports.dishDetail = (req, res) => {
  let user = null
  if(req.cookies.jwt){
    user = "user"
  }

  db.getDish(req.params.id)
    .then(dish => {
      res.render('dishes/detail', {dish: dish, user:user});
    })
    .catch(err => {
      console.log(err);
    });
};




exports.aboutUs = (req, res) => {
  let user = null
  if(req.cookies.jwt){
    user = "user"
  }

  res.render('dishes/about',{user:user});
}

exports.menu_page = (req, res) => {
  let user = null
  if(req.cookies.jwt){
    user = "user"
  }

  db.getAllDishes()
    .then(dishes => {
      let pizzas = dishes.filter(dish => dish.category === 'pizza');
      let pasta = dishes.filter(dish => dish.category === 'pasta');
      res.render('dishes/menu', {pizzas: pizzas, pastas: pasta, user:user});
    })
    .catch(err => {
      console.log(err);
    });
}

exports.admin_page = (req, res) => {
  db.getDishesForAdmin()
    .then(dishes => {
      res.render('users/admin', { dishes,
        user:"user" });
    })
    .catch(err => {
      console.log(err);
    });
}


exports.dish_edit_page = (req, res) => {
  db.getDish(req.params.id)
    .then(dish => {
      let ingredients = dish.ingredients.map(ingredient => ingredient).join(', ');
      let allergies = dish.allergies.map(allergy => allergy).join(', ');
      res.render('dishes/edit', { 
        dish: dish ,
        dish_ingredients: ingredients,
        dish_allergies: allergies,
        user:"user"
      });
    })
    .catch(err => {
      console.log(err);
    });
}

exports.dish_edit = (req, res) => {
  if(req.body.show_on_menu === 'on'){
    req.body.show_on_menu = true;
  } else {
    req.body.show_on_menu = false;
  }
  let dish = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    ingredients: req.body.ingredients.split(','),
    allergies: req.body.allergies.split(', '),
    image: req.body.category === 'pizza' ? 'pizza.jpeg' : 'pasta.jpeg', 
    show_on_menu: req.body.show_on_menu
  }
  console.log(req.body.show_on_menu);
  console.log(dish.show_on_menu);
  db.updateDish(req.params.id, dish)
    .then(() => {
      res.redirect('/admin',{
        user:"user"
      });
    })
    .catch(err => {
      console.log(err);
    });
}
  
exports.dish_add_page = (req, res) => {
  res.render('dishes/add', {
    user:"user"
  });
}

exports.dish_add = (req, res) => {
  if(req.body.show_on_menu === 'on'){
    req.body.show_on_menu = true;
  } else {
    req.body.show_on_menu = false;
  }
  let dish = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    ingredients: req.body.ingredients.split(','),
    allergies: req.body.allergies.split(', '),
    show_on_menu: req.body.show_on_menu,
    image: req.body.category === 'pizza' ? 'pizza.jpeg' : 'pasta.jpeg', 
    votes: 0
}
  db.addDish(dish)
    .then(() => {
      res.redirect('/admin', {
        user:"user"
      });
    }).catch(err => {
      console.log(err);
    }
  );
}
exports.delete_dish = (req, res) => {
  db.deleteDish(req.params.id)
    .then(() => {
      res.redirect('/admin',{
        user:"user"
      });
    })
    .catch(err => {
      console.log(err);
    });
}

