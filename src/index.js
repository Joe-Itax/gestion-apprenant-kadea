require("dotenv").config();

const express = require("express");
const cors = require("cors");
const passport = require("passport");

const {
  authBaseURI,
  apprenantsBaseURI,
  coachesBaseURI,
  machinesBaseURI,
  sessionsBaseURI,
  cohortesBaseURI,
  formationBaseURI,
} = require("./config/paths.config");

const { authRouter, formationRouter } = require("./routes");
/**
 * ------------------  GENERAL SETUP  ---------------
 */
const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [`http://localhost:${port}`];
const corsOption = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not Allowed By CORS`));
    }
  },
};
app.use(cors(corsOption));
app.use(express.json());
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

/**
 * ----------------- PASSPORT AUTHENTICATION --------------------
 */

//Not now

/**
 * ----------------- ROUTES --------------------
 */
app.get("/", function (req, res) {
  return res.send("Bingo");
});
app.use(authBaseURI, authRouter);
app.use(formationBaseURI, formationRouter);
app.listen(port, function () {
  console.log(`Le serveur écoute sur le port ${port}`);
});
