const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.engine('hbs', hbs.engine({ 
  extname: '.hbs',
  defaultLayout: 'main' 
}));

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(__dirname);
// console.log('PATH: ', path.join(__dirname, 'views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

// route
app.get('/', (req, res) => {
  // var a = 1;
  // var b = 2;

  // var c = a + b;

  // return res.send('Hello World!');

  // return res.send(`<h1>Hello World!</h1>`);

  // return res.send(`<html><head></head><body><h1>Hello World!</h1></body></html>`);

  // return res.send(`<h1 style="color:red;">Hello World!</h1>`);
  
  // return res.send(`123`);

  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});