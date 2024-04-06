const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const local = require("../authentication/local");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/sign-up", [
  body("username").trim().escape(),
  body("password").trim().escape(),
  body("name").trim().escape(),

  async function (req, res, next) {
    const errors = validationResult(req);
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    };

    if (!errors.isEmpty()) {
      user.errors = errors;
      res.json(user);
      return;
    }
    const users = await User.find({ username: req.body.username });
    if (users.length) {
      user.errors = { message: "Username Already exists" };
      res.json(user);
      return;
    }
    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
          user.errors = err;
          res.json(user);
          return;
        }
        user.password = hashedPassword;
        const newUser = new User(user);
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
          expiresIn: "24h",
        });
        res.json({ token });
      });
    } catch (err) {
      next(err);
    }
  },
]);

router.post(
  "/login",
  local.authenticate("local", { session: false }),
  function (req, res, next) {
    const token = jwt.sign({ id: req.user._id }, process.env.SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
    return;
  }
);

module.exports = router;
