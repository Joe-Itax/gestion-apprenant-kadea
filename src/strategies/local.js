//const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { PrismaClient } = require("@prisma/client");
const { comparePwd } = require("../utils/helpers");
const { apprenant, coach } = new PrismaClient();

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async function (email, password, done) {
        try {
          const user = await apprenant.findFirst({
            where: { email: email },
          });
          console.log(`User: ${user}`);
          if (!email || !password) {
            throw new Error("Missings credentials");
          }
          if (!user) {
            return done(null, false, { message: "User not found" });
          }
          const isValidPwd = await comparePwd(password, user?.password);
          //console.log(`isValidPwd: ${isValidPwd}`);
          if (!isValidPwd) {
            return done(null, false, { message: "Invalid password" });
          }
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
};
