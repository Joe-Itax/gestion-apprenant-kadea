const { PrismaClient } = require("@prisma/client");
const { session } = new PrismaClient();

/**
 ---------------------------
 Get all Sessions from 
 database
 ---------------------------
 */
const getAllSession = async (req, res) => {
  try {
    const sessions = await session.findMany();
    return res.status(200).json({ sessions: sessions });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Add New Session into 
 database
 ---------------------------
 */
const postNewSession = async (req, res) => {
  try {
    const newSessions = req.body;

    const addedSession = await session.create({ data: newSessions });

    res.status(201).json({
      message: "Nouvelle session créée avec succès",
      newSession: addedSession,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 ---------------------------
 Modify informations of one 
 Session in database
 ---------------------------
 */
const modifyOneSession = async (req, res) => {};

/**
 ---------------------------
 Delete one Session in 
 database
 ---------------------------
 */
const deleteOneSession = async (req, res) => {};

module.exports = {
  getAllSession,
  postNewSession,
  modifyOneSession,
  deleteOneSession,
};
