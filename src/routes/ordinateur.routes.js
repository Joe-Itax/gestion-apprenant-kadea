const { Router } = require("express");

const ordinateurRouter = Router();

const {
  getAllOrdinateur,
  postNewOrdinateur,
  modifyOneOrdinateur,
  deleteOneOrdinateur,
} = require("../controllers/ordinateur.controller");

ordinateurRouter.get("/", getAllOrdinateur);

ordinateurRouter.post("/", postNewOrdinateur);

ordinateurRouter.patch("/:id", modifyOneOrdinateur);

ordinateurRouter.delete("/:id", deleteOneOrdinateur);

module.exports = ordinateurRouter;
