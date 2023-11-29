const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;
const WEBROOT = path.join(__dirname, './client/public');

let sports = ['hockey', 'ballroom dancing', 'bowling', 'darts'];

app.use(express.static(WEBROOT));
app.use(express.json());

app.get('/cities', (_, res) => {
    let cityList = ['Ottawa', 'Montreal', 'Toronto', 'Quebec'];
    res.json(cityList);
});

app.use(express.urlencoded({'extended': true}));
app.route('/sports')
    .get((_, res) => {
        res.json(sports);
    })
    .post((req, res) => {
        sports.push(req.body.newSport);
        res.json("Success");

    });

app.use((_, res) => {
    res.sendFile(path.join(WEBROOT, 'index.html'));
})

app.listen(PORT, () => 
    console.log(`Express listening on port ${PORT}`)
);