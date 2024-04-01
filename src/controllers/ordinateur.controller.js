const { PrismaClient } = require("@prisma/client");
const { ordinateur } = new PrismaClient();

/**
 ---------------------------
 Get all Desktop from 
 database
 ---------------------------
 */
const getAllOrdinateur = async (req, res) => {
  try {
    const ordinateurs = await ordinateur.findMany();
    return res.status(200).json({ ordinateurs: ordinateurs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Add New Desktop into 
 database
 ---------------------------
 */
const postNewOrdinateur = async (req, res) => {
  try {
    const newOrdinateur = req.body;

    const addedOrdinateur = await ordinateur.create({ data: newOrdinateur });

    res.status(201).json({
      message: "Nouvel ordinateur ajouté avec succès",
      newOrdinateur: addedOrdinateur,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Modify informations of one 
 desktop in database
 ---------------------------
 */
const modifyOneOrdinateur = async (req, res) => {};

/**
 ---------------------------
 Delete one desktop in 
 database
 ---------------------------
 */
const deleteOneOrdinateur = async (req, res) => {};

module.exports = {
  getAllOrdinateur,
  postNewOrdinateur,
  modifyOneOrdinateur,
  deleteOneOrdinateur,
};
