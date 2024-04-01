const { Router } = require("express");
const coachRouter = Router();

const {
  getAllCoaches,
  modifyCoach,
  deleteOneCoach,
} = require("../controllers/coach.controller");
coachRouter.get("/", getAllCoaches);

coachRouter.patch("/:id", modifyCoach);

coachRouter.delete("/:id", deleteOneCoach);

module.exports = coachRouter;
