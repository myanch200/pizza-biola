const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/dishesController');
const userController = require('../controllers/usersController');
router.get('/about', controller.aboutUs);
router.get('/menu', controller.menu_page);
router.get('/dishes/delete/:id',controller.delete_dish);
router.get('/dishes/edit/:id', controller.dish_edit_page);
router.post('/dishes/edit/:id', controller.dish_edit);
router.get('/dishes/:id', controller.dishDetail);
router.get('/', controller.index);
router.get('/login', userController.login_page);
router.post('/login', userController.login);
router.get('/admin', controller.admin_page);
router.use(function(req, res) {
  res.status(404);
  res.type('text/plain');
  res.send('404 Not found.');
});

router.use(function(err, req, res, next) {
  res.status(500);
  res.type('text/plain');
  res.send('Internal Server Error.');
});


module.exports = router;