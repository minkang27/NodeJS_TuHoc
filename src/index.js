const express = require('express')
const path = require('path');
const app = express()
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000

const route = require('./routes');
const db = require('./config/db');
//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//console.log('PATH: ', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);





// 127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})