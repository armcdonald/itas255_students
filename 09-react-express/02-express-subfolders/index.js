const express = require('express');
const dotenv = require('dotenv');

const itemsRouter = require('./src/routes/items.route');
const carsRouter = require('./src/routes/cars.route');
const personsRouter = require('./src/routes/persons.route');

const app = express();
dotenv.config();
const MYPORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
});

app.use('/items', itemsRouter);
app.use('/cars', carsRouter);
app.use('/persons', personsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(MYPORT, () => {
    console.log(`Server running on port ${MYPORT}`);
    // console.log(data);

});