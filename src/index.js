require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
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

const {
  authRouter,
  formationRouter,
  ordinateurRouter,
  sessionRouter,
  cohorteRouter,
  apprenantRouter,
  coachRouter,
} = require("./routes");

/**
 * ------------------  GENERAL SETUP  ---------------
 */
const app = express();
const port = 3002;

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
const sessionOption = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // Equals 1 day
    // (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    maxAge: 1000 * 60 * 60 * 24,
  },
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionOption.cookie.secure = true; // serve secure cookies
}
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sessionOption));
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

require("./strategies/jwt")(passport);
app.use(passport.initialize());
//app.use(passport.session());
app.use((req, res, next) => {
  console.log(req.session);
  next();
});

/**
 * ----------------- ROUTES --------------------
 */
app.get("/", function (req, res) {
  return res.send("Bingo, la racine de l'app");
});
app.use(authBaseURI, authRouter);
app.use(apprenantsBaseURI, apprenantRouter);
app.use(coachesBaseURI, coachRouter);
app.use(formationBaseURI, formationRouter);
app.use(machinesBaseURI, ordinateurRouter);
app.use(sessionsBaseURI, sessionRouter);
app.use(cohortesBaseURI, cohorteRouter);
app.listen(port, function () {
  console.log(`Le serveur écoute sur le port ${port}`);
});
