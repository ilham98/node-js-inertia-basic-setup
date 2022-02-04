const express = require("express");
const router = express.Router();
const { User } = require("./models");

function checkSignIn(req, res, next) {
  if (req.session?.user) {
    next(); //If session exists, proceed to page
  } else {
    req.Inertia.redirect("/login");
  }
}

function isGuest(req, res, next) {
  if (!req.session?.user) {
    next(); //If session exists, proceed to page
  } else {
    req.Inertia.redirect("/");
  }
}

router.get("/", (req, res) => {
  req.Inertia.setViewData({ title: "Home" }).render({
    component: "Home",
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: { username, password },
  });
  if (!user) {
    req.flash("errorMessage", "Incorrect username or password");
    return req.Inertia.redirect("/login");
  }
  req.session.user = {
    userId: user.id,
  };
  return req.Inertia.redirect("/");
});

router.get("/dashboard", checkSignIn, (req, res) => {
  req.Inertia.setViewData({ title: "Dashboard" }).render({
    component: "Dashboard",
  });
});

router.get("/login", isGuest, (req, res) => {
  req.Inertia.setViewData({ title: "Login" }).render({
    component: "Auth/Login",
    props: {
      error: {
        message: req.flash("errorMessage")?.[0],
      },
    },
  });
});

router.get("/register", isGuest, (req, res) => {
  req.Inertia.setViewData({ title: "Register" }).render({
    component: "Auth/Register",
  });
});

router.post("/register", isGuest, async (req, res) => {
  const { username, password } = req.body;
  await User.create({ username, password });
  return req.Inertia.redirect("/login");
});

router.post("/logout", checkSignIn, async (req, res) => {
  delete req.session.user;
  return req.Inertia.redirect("/");
});

module.exports = router;
