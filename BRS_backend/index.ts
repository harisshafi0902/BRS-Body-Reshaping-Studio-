require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
mongoose.set('strictQuery', false);
const database = mongoose.connection;

database.on('error', (error: any) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
// server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
/**
 * config:
 * PORT: 5555
 */
const PORT = 1234;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const gymRoutes = require('./routes/gym-routes');

app.use('/gym', gymRoutes)

app.listen(PORT, function () {
    console.log(`app.js listening to http://localhost:${PORT}/`);
});