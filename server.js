const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./controllers/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
// set database URL
mongoose.connect(process.env.DATABASE_URL, { userNewUrlParser: true })
// check connection to database
const db = mongoose.connection;
// print error message in case of connection error
db.on('error', error => console.error(error));
// print connection message when database is opened for the 1st time (runs only one time)
db.once('open', () => console.log('Connected to MongoDB'));


app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);