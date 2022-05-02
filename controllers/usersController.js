const userDao = require('../models/usersModel.js');

exports.login_page = (req, res) => {
  res.render('users/login', {});
}

exports.login = (req, res) => {
  userDao.lookup(req.body.username, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else if (user == null) {
      res.status(404).send('User not found');
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else if (result) {
          req.session.user = user;
          res.redirect('/');
        } else {
          res.status(401).send('Wrong password');
        }
      });
    }
  });
}