const { PrismaClient } = require("@prisma/client");
const { apprenant } = new PrismaClient();

/**
 ---------------------------
 Get all apprenants from 
 database
 ---------------------------
 */
const getAllApprenants = async (req, res) => {
  try {
    const apprenants = await apprenant.findMany();
    return res.status(200).json({ apprenants: apprenants });
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
const modifyApprenant = async (req, res) => {};

/**
 ---------------------------
 Delete one desktop in 
 database
 ---------------------------
 */
const deleteOneApprenant = async (req, res) => {};

module.exports = {
  getAllApprenants,
  modifyApprenant,
  deleteOneApprenant,
};
