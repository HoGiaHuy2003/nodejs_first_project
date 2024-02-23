const newsRouter = require('./news');
const siteRouter = require('./site')

function route(app) {
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

    // app.get('/news', (req, res) => {
    //   console.log(req.query.q);
    //   res.render('news');
    // });

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // Local host --- Hosting

    // Action ---> Dispatcher ---> Function handler

    app.get('/search', (req, res) => {
    // console.log(req.query);
    // console.log(req.query.q);
    res.render('search');
    });

    app.post('/search', (req, res) => {

    // console.log(req.query);

    console.log(req.body);

    // res.render('search');
    res.send('');
    });
}

module.exports = route;
