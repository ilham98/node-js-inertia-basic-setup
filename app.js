const express = require("express");
const app = express();
const inertia = require("inertia-node");
const routes = require("./server/routes");
const inertiaHtml = require("./server/inertiaHtml");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userMiddleware = require("./server/middlewares/userMiddleware");
const flash = require("connect-flash");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "Your secret key",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(express.static("public"));
app.use(inertia(inertiaHtml, "1"));
app.use(userMiddleware);
app.use(routes);

module.exports = app;
