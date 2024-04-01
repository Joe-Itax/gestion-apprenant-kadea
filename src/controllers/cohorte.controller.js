const { PrismaClient } = require("@prisma/client");
const { cohorte } = new PrismaClient();

/**
 ---------------------------
 Get all cohortes from 
 database
 ---------------------------
 */
const getAllCohortes = async (req, res) => {
  try {
    const cohortes = await cohorte.findMany();
    return res.status(200).json({ cohortes: cohortes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Add New Cohorte into 
 database
 ---------------------------
 */
const postNewCohorte = async (req, res) => {
  try {
    const newCohorte = req.body;

    const addedCohorte = await cohorte.create({ data: newCohorte });

    res.status(201).json({
      message: "Nouvelle cohorte créée avec succès",
      newCohorte: addedCohorte,
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
const modifyOneCohorte = async (req, res) => {};

/**
 ---------------------------
 Delete one desktop in 
 database
 ---------------------------
 */
const deleteOneCohorte = async (req, res) => {};

module.exports = {
  getAllCohortes,
  postNewCohorte,
  modifyOneCohorte,
  deleteOneCohorte,
};
