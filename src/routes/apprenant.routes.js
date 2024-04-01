const { Router } = require("express");
const apprenantRouter = Router();

const {
  getAllApprenants,
  modifyApprenant,
  deleteOneApprenant,
} = require("../controllers/apprenant.controller");

apprenantRouter.get("/", getAllApprenants);

apprenantRouter.patch("/:id", modifyApprenant);

apprenantRouter.delete("/:id", deleteOneApprenant);

module.exports = apprenantRouter;
