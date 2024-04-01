const { Router } = require("express");
const passport = require("passport");

const {
  signupStudent,
  loginStudent,
  logoutStudent,
} = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/signup", signupStudent);
authRouter.post("/login", loginStudent);
authRouter.post("/logout", logoutStudent);
//authRouter.post("/login", passport.authenticate("jwt"), loginStudent);

module.exports = authRouter;
