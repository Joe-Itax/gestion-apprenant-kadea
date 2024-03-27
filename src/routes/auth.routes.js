const { Router } = require("express");

const { signupStudent } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/signup", signupStudent);

module.exports = authRouter;
