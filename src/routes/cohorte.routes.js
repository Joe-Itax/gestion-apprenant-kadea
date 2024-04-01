const { Router } = require("express");

const cohorteRouter = Router();

const {
  getAllCohortes,
  postNewCohorte,
  modifyOneCohorte,
  deleteOneCohorte,
} = require("../controllers/cohorte.controller");

cohorteRouter.get("/", getAllCohortes);

cohorteRouter.post("/", postNewCohorte);

cohorteRouter.patch("/:id", modifyOneCohorte);

cohorteRouter.delete("/:id", deleteOneCohorte);

module.exports = cohorteRouter;
