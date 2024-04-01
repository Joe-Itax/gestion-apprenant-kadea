const { PrismaClient } = require("@prisma/client");
const { coach } = new PrismaClient();

/**
 ---------------------------
 Get all cohortes from 
 database
 ---------------------------
 */
const getAllCoaches = async (req, res) => {
  try {
    const coaches = await coach.findMany();
    return res.status(200).json({ coaches: coaches });
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
const modifyCoach = async (req, res) => {};

/**
 ---------------------------
 Delete one desktop in 
 database
 ---------------------------
 */
const deleteOneCoach = async (req, res) => {};

module.exports = {
  getAllCoaches,
  modifyCoach,
  deleteOneCoach,
};
