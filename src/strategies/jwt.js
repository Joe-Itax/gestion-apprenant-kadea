const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { PrismaClient } = require("@prisma/client");
const { comparePwd } = require("../utils/helpers");
const { apprenant, coach } = new PrismaClient();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = function (passport) {
  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      //const apprenantUser = await apprenant.findFirst({});
      const apprenantUser = apprenant.findUniqueOrThrow({
        where: {
          email: jwt_payload.email,
        },
      });

      if (apprenantUser) {
        return done(null, apprenantUser);
      }
      return done(null, false);
    })
  );
};
