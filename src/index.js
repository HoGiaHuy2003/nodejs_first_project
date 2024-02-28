const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLHttpRequest, fetch, axios,

// HTTP logger
// app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    }),
);

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(__dirname);
// console.log('PATH: ', path.join(__dirname, 'views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));

// Home, search, contact

// Routes init
route(app);

// // route
// app.get('/', (req, res) => {
//   // var a = 1;
//   // var b = 2;

//   // var c = a + b;

//   // return res.send('Hello World!');

//   // return res.send(`<h1>Hello World!</h1>`);

//   // return res.send(`<html><head></head><body><h1>Hello World!</h1></body></html>`);

//   // return res.send(`<h1 style="color:red;">Hello World!</h1>`);

//   // return res.send(`123`);

//   res.render('home');
// });

// // app.get('/news', (req, res) => {
// //   console.log(req.query.q);
// //   res.render('news');
// // });

// // Local host --- Hosting

// // Action ---> Dispatcher ---> Function handler

// app.get('/search', (req, res) => {
//   // console.log(req.query);
//   // console.log(req.query.q);
//   res.render('search');
// });

// app.post('/search', (req, res) => {

//   // console.log(req.query);

//   console.log(req.body);

//   // res.render('search');
//   res.send('');
// });

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
