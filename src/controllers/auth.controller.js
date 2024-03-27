const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");
const { apprenant, coach } = new PrismaClient();
/*
---------------------------------
Create and save a new apprenant
in the database
---------------------------------
*/
async function signupStudent(req, res) {
  const {
    prenom,
    nom,
    postnom,
    date_naissance,
    adresse,
    email,
    password,
    telephone,
  } = req.body;

  try {
    const newStudent = {
      prenom: prenom,
      nom: nom,
      postnom: postnom,
      date_naissance: date_naissance,
      adresse: adresse,
      email: email,
      password: await bcrypt.hash(password, 10),
      telephone: telephone,
    };

    const addStudent = await apprenant.create({ data: newStudent });
    return res
      .status(201)
      .json({ message: "L'utilisateur a été créé", data: addStudent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  signupStudent,
};
