const { Router } = require("express");

const formationRouter = Router();

const { PrismaClient } = require("@prisma/client");
const { formation } = new PrismaClient();
formationRouter.post("/", async function (req, res) {
  try {
    const newFormation = req.body;

    const addedFormation = await formation.create({ data: newFormation });

    res.status(201).json({ message: "Formation créer", data: addedFormation });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//formationRouter.get();

module.exports = formationRouter;
