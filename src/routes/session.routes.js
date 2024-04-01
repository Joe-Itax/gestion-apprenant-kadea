const { Router } = require("express");

const sessionRouter = Router();

const {
  getAllSession,
  postNewSession,
  modifyOneSession,
  deleteOneSession,
} = require("../controllers/session.controller");

sessionRouter.get("/", getAllSession);

sessionRouter.post("/", postNewSession);

sessionRouter.patch("/:id", modifyOneSession);

sessionRouter.delete("/:id", deleteOneSession);

module.exports = sessionRouter;
