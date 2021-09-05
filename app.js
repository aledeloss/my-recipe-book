const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");

const { dbConnection } = require("./database/config");
const { securedUser, secureAdmin } = require("./middlewares/auth");
dotenv.config();
dbConnection();

const indexRouter = require("./routes/indexRouter");
const usersRouter = require("./routes/usersRouter");
const recipesRouter = require("./routes/recipesRouter");
const authRouter = require("./routes/authRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);
app.use("/auth", authRouter);

// app.use("/admin/recipes", secureAdmin, adminRecipes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendStatus(404);
  // next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.error(err);
  res.sendStatus(err.status || 500);
  // res.render('error');
});

module.exports = app;
