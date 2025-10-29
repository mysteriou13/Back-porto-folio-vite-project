const dotenv = require('dotenv');
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { connectDB } = require("./Connect");

dotenv.config();

const app = express();
const isProd = process.env.NODE_ENV === 'production';

/* connection database */
connectDB();

const userRouter = require('./routes/user');
const  Navmenu = require('./routes/NavMenu')
 const Contact = require("./routes/Contact")

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
  
app.use('/user', userRouter);
app.use("/navmenu",Navmenu);
app.use("/contact",Contact)

if (isProd) {
  console.log("mode prod");

  // Fichiers statiques de Vite
  app.use(express.static(path.join(__dirname, 'dist')));

  // Fallback SPA
  app.get('*', ( res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use((next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
