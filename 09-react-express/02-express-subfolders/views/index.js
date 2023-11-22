// import express from 'express';
const express = require('express');
// import data from './data/somedata.json';
const data = require('./data/somedata.json');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const hbs = require('hbs');

const app = express();
const PORT = 8888;
const LOGDIR = 'logs';
const ERRDIR = 'errors';

//todo: 0. Show returning static string
// app.get('/', (req, res) => {res.send("Hello there")
// });

// //todo: 10. Show view engines
// app.set('view engine', 'pug');
// app.set('view engine', 'hbs')

//todo: 1. Show returning static items
const OPTIONS = {
    'index': 'index.html',
    // 'redirect': true,
    'setHeaders': (res, path, stat) => {
        res.set('myheader', 'Allan');
        res.set('x-timestamp', Date.now());
    }
}
// //todo: 11. logging using morgan
// //Note: Can use predefined formats of combined, comon, dev, short, tiny
// const LOGDETAILS = ':date[iso] :method :url HTTP/:http-version :status :res[content-length] :response-time ms';
// const OUTLOG = fs.createWriteStream(path.join(__dirname, LOGDIR, 'access.log'), {'flags': 'a'});

// const LOGOPTIONS = {
//     skip: (req, res) => {return (req.originalUrl === '/favicon.ico')}, 
//     stream: OUTLOG     
//  }

// // app.use(express.static('public'));
app.use(express.static('public', OPTIONS));

// app.use(morgan(LOGDETAILS, LOGOPTIONS));

// //todo: 2. handling favicon.ico
// app.get('/favicon.ico', (req, res) => res.status(204));

// //todo: 10. templating using pug
// app.get('/about', (req, res) => {
//     res.render('about', {title: 'About', message: 'This is a message'});
// });
// app.get('/hbs', (req, res) => {
//     res.render('hbs', {title: 'HBS', message: 'This is a message'});
// });

// //todo: 3. Show basic routing
// app.get('/items', (req, res) => {
//     console.log(req.headers);
//     console.log(req.header('host'));
//     res.send(`got get from url ${req.originalUrl} on port ${PORT}`);
// });

// app.post('/items', (req, res) => { 
//     res.send(`got post from url ${req.originalUrl} on port ${PORT}`);
// });

// app.put('/items', (req, res) => {
//     res.send(`got put from url ${req.originalUrl} on port ${PORT}`);
// });

// app.delete('/items', (req, res) => {
//     res.send(`got delete from url ${req.originalUrl} on port ${PORT}`);
// });

// //todo: 4. Show app.route for middleware and refactoring
// app.route('/cars')
//     .get((req,res) => {
//         res.send(`Received GET request from ${req.originalUrl}`);
//     })
//     .post((req,res) => {
//         res.send(`Received POST request from ${req.originalUrl}`);
//     })
//     .put((req,res) => {
//         res.send(`Received PUT request from ${req.originalUrl}`);
//     })
//     .delete((req,res) => {
//         res.send(`Received DELETE request from ${req.originalUrl}`);
//     });

// //todo: 5. Show various routing possibilities
// // app.get('/persons', (req, res) => {
// //     res.json(data);
// // });

// // app.get('/persons/:id', (req, res) => {
// //     console.log(req.params);
// //     let userId = Number(req.params.id);
// //     console.log(data[userId]);
// //     res.send(data[userId]);
// // });

// //todo: 6. Combine routing using optional parameters
// app.get('/persons/:id?', (req, res) => {
//     console.log(req.params);
//     if (req.params.id === undefined) {
//         res.json(data);
//     } else {
//         let userId = Number(req.params.id);
//         console.log(data[userId]);
//         res.send(data[userId]);
//     }
// });

// //todo: 7. Show multiple parameters
// app.get('/persons/:id/provinces/:prov', (req, res) => {
//     console.log(req.params);
//     console.log(req.params.id);
//     console.log(req.params.prov);
//     res.send(`person requested ${req.params.id} and province ${req.params.prov}`);
// });


// //todo: 8. Using builtin middleware to access information
// app.use(express.json());

// app.put('/getjson', (req,res) => {
//     console.log(req.body);
//     console.log(req.body.sendData);
//     res.send(req.body);
// });

// //todo: 9. getting information from a form
// app.use(express.urlencoded());

// app.post('/getencoded', (req,res) => {
//     console.log(req.body);
//     console.log(req.body.firstName)
//     res.send(req.body);
// });

//todo: 1.5 default error
app.use((req,res) => {
    res.set('Content-Type', 'text/html');
    res.status(404).sendFile(path.join(__dirname, ERRDIR, '404.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // console.log(data);

});