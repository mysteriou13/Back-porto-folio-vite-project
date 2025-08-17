const dotenv = require('dotenv');
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { connectDB } = require("./Connect");

dotenv.config();

const app = express();
const isProd = process.env.NODE_ENV === 'production';

/* connection database */
connectDB();

const userRouter = require('./routes/user');
const  Navmenu = require('./routes/NavMenu')


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
  
app.use('/user', userRouter);
app.use("/navmenu",Navmenu);

if (!isProd) {
  console.log("mode dev");

  // API backend


  // Proxy frontend vers Vite
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:5173',
      changeOrigin: true,
    })
  );

} else {
  console.log("mode prod");

  // API backend


  // Fichiers statiques de Vite
  app.use(express.static(path.join(__dirname, 'dist')));

  // Fallback SPA
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
