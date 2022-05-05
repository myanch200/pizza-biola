const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const dishesRouter = require('./routes/dishesRoutes');
const cookieParser = require('cookie-parser') 
require('dotenv').config();
app.use(express.urlencoded({extended: false }));

const port = process.env.PORT || 3000;
const path = require('path');
const public = path.join(__dirname,'public');


app.use(express.static(public));
app.use(cookieParser())

app.set('view engine', 'mustache');
app.engine('mustache', mustache());
app.set('views', __dirname + '/views');



app.use('/', dishesRouter)

app.listen(port, function() {
  console.log('listening on port 3000');
});
