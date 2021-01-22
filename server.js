const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//DB

// const db = require("./models");
// db.sequelize.sync();
//In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });



// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // The "catch all" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });


//ROUTES
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to 9ja Bloodbank server" });
});
const bloodcenterRoutes = require('./routes/BloodCenter.Route')
const userRoutes = require('./routes/Users.Route')
// app.use('/bloodcenter', bloodcenterRoutes)
app.use('/user', userRoutes)
app.use('/blood', bloodcenterRoutes)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
