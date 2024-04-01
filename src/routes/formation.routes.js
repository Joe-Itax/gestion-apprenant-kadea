const { Router } = require("express");

const formationRouter = Router();

const {
  getAllFormation,
  postNewFormation,
  modifyFormation,
  deleteOneFormation,
} = require("../controllers/formation.controller");

formationRouter.get("/", getAllFormation);

formationRouter.post("/", postNewFormation);

formationRouter.patch("/:id", modifyFormation);

formationRouter.delete("/:id", deleteOneFormation);

module.exports = formationRouter;
