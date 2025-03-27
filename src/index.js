const express = require('express')
const path = require('path');
const app = express()
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//console.log('PATH: ', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/trang-chu', (req, res) => res.send('Hello World!'));

// 127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})