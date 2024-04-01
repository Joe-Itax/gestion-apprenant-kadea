const { PrismaClient } = require("@prisma/client");
const { formation } = new PrismaClient();

/**
 ---------------------------
 Get all Desktop from 
 database
 ---------------------------
 */
const getAllFormation = async (req, res) => {
  try {
    const formations = await formation.findMany();
    return res.status(200).json({ formations: formations });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Add New Formation into 
 database
 ---------------------------
 */
const postNewFormation = async (req, res) => {
  try {
    const newFormation = req.body;

    const addedFormation = await formation.create({ data: newFormation });

    res.status(201).json({
      message: "Nouvelle formation créée avec succès",
      data: addedFormation,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Modify informations of one 
 formation in database
 ---------------------------
 */
const modifyFormation = async (req, res) => {};

/**
 ---------------------------
 Delete one formation in 
 database
 ---------------------------
 */
const deleteOneFormation = async (req, res) => {};
module.exports = {
  getAllFormation,
  postNewFormation,
  modifyFormation,
  deleteOneFormation,
};
