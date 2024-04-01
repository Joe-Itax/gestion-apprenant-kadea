const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");
const { apprenant, coach } = new PrismaClient();

const { hashPwd, comparePwd } = require("../utils/helpers");
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
    /*const newStudent = {
      prenom: prenom,
      nom: nom,
      postnom: postnom,
      date_naissance: date_naissance,
      adresse: adresse,
      email: email,
      password: await bcrypt.hash(password, 10),
      telephone: telephone,
    };*/

    req.body.password = await hashPwd(req.body.password);
    const newStudent = req.body;
    const addStudent = await apprenant.create({ data: newStudent });
    return res.status(201).json({
      message: "Un nouvel apprenant a été ajouté avec succès!",
      newStudent: addStudent,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function loginStudent(req, res) {
  const { email, password } = req.body;
  try {
    const apprenantUser = await apprenant.findUnique({
      where: { email: email },
    });
    if (!apprenantUser) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const passwordMatch = await comparePwd(password, apprenantUser.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: apprenantUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "72h",
      }
    );

    // Add your authenticated property below:
    req.session.authenticated = true;
    // Add the user object below:
    req.session.user = {
      user: apprenantUser,
    };

    return res.json({
      message: "Logged in successfully",
      user: apprenantUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function logoutStudent(req, res) {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ message: error.message });
    }
    return res.send("User is logout");
  });
}

module.exports = {
  signupStudent,
  loginStudent,
  logoutStudent,
};
