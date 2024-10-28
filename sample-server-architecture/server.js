import express from 'express';
import dotenv from 'dotenv';
// import path from 'path';
// import morgan from 'morgan';
// import fs from 'fs';

// NOTE: Add links to route files here
import examplesRouter from './src/routes/examples.route.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Using morgan to keep logs
// const OUTLOG = fs.createWriteStream(path.join(__dirname, "log", 'access.log'),
//             {'flags': 'a'});

// const LOGDETAILS = ':date[iso] :method :url HTTP/:http-version :status';

// const LOGOPTIONS = {
//     skip: (req, res) => {return (req.originalUrl === '/favicon.ico')},
//     stream: OUTLOG
// }

// app.use(morgan(LOGDETAILS, LOGOPTIONS));

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
});

//NOTE: Add the path to the router file here in order to call it
app.use('/examples', examplesRouter);
  
// Error handler middleware 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})